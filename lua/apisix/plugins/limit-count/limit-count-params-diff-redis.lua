local redis_new = require("resty.redis").new
local core = require("apisix.core")
local assert = assert
local setmetatable = setmetatable
local tostring = tostring

local _M = { version = 0.1 }

local mt = {
    __index = _M
}

function _M.new(plugin_name, redis_conf)

    local self = { redis = redis_conf,
                   plugin_name = plugin_name }
    return setmetatable(self, mt)
end

function _M.incoming(self, key, limit, window)
    local red = redis_new()
    local conf = self.redis
    local timeout = conf.timeout or 1000    -- 1sec
    core.log.info("ttl key: ", key, " timeout: ", timeout)

    red:set_timeouts(timeout, timeout, timeout)

    local ok, err = red:connect(conf.host, conf.port or 6379)
    if not ok then
        return false, err
    end

    local ok, err = red:select(conf.database or 0)
    if not ok then
        return false, err
    end

    local remaining
    key = "apisix" .. "-" .. self.plugin_name .. tostring(key)

    local ret, err = red:ttl(key)
    core.log.info("ttl key: ", key, " ret: ", ret, " err: ", err)
    if ret < 0 then
        ret, err = red:set(key, limit - 1, "EX", window, "NX")
        if not ret then
            return nil, err
        end

        return 0, limit - 1
    end

    remaining, err = red:incrby(key, -1)
    if not remaining then
        return nil, err
    end

    local ok, err = red:set_keepalive(10000, 100)
    if not ok then
        return nil, err
    end

    if remaining < 0 then
        return nil, "rejected"
    end

    return 0, remaining
end

return _M
