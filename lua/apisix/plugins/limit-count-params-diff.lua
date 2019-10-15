local limit_local_new = require("resty.limit.count").new
local core = require("apisix.core")
local plugin_name = "limit-count-params-diff"
local limit_redis_new
local ngx = ngx
do
    local redis_src = "apisix.plugins.limit-count.limit-count-params-diff-redis"
    limit_redis_new = require(redis_src).new
end

local schema = {
    type = "object",
    properties = {
        -- 请求的uri参数名称
        key = { type = "string", minLength = 2 },
        -- 分组名称
        group = { type = "string" },
        -- 超过限制时的state_code
        rejected_code = { type = "integer", minimum = 200, maximum = 600 },
        policy = {
            type = "array",
            items = {
                type = "object",
                properties = {
                    -- uri参数值
                    value = {
                        type = "string", minLength = 1
                    },
                    -- 最大数量
                    count = {
                        type = "integer", minimum = 0
                    },
                    -- 时间窗口的大小（以秒为单位），超过这个时间就会重置
                    time_window = {
                        type = "integer", minimum = 0
                    }
                },
                require = { "value", "count", "time_window" }
            }
        },
        redis = {
            type = "object",
            properties = {
                -- redis host地址
                host = {
                    type = "string", minLength = 2
                },
                -- redis 端口号
                port = {
                    type = "integer", minimum = 1
                },
                -- redis database
                database = {
                    type = "integer", minimum = 1
                },
                -- 连接redis的timeout值
                timeout = {
                    type = "integer", minimum = 1
                },
            },
            required = { "host" },
        },
    },
    additionalProperties = false,
    required = { "key", "rejected_code", "policy", "redis" },
}

local _M = {
    version = 0.1,
    priority = 5001,
    name = plugin_name,
    schema = schema,
}

function _M.check_schema(conf)
    local ok, err = core.schema.check(schema, conf)
    if not ok then
        return false, err
    end

    if not conf.key then
        return false, "missing key option"
    end

    if not conf.policy then
        return false, "missing policy option"
    end

    for _, p in ipairs(conf.policy) do
        if not p.value then
            return false, "missing policy's value"
        end
        if not p.count then
            return false, "missing policy's count"
        end
        if not p.time_window then
            return false, "missing policy's time_window"
        end
    end

    if not conf.redis then
        return false, "missing redis option"
    end

    conf.redis.port = conf.redis.port or 6379
    conf.redis.database = conf.redis.database or 0
    conf.redis.timeout = conf.redis.timeout or 1000

    return true
end

local function create_limit_obj(conf)
    core.log.info("create new limit-count-params-diff plugin instance")

    return limit_redis_new("plugin-" .. plugin_name, conf.redis)
end

function _M.access(conf, ctx)
    core.log.info("ver: ", ctx.conf_version)
    local lim, err = core.lrucache.plugin_ctx(plugin_name, ctx,
            create_limit_obj, conf)
    if not lim then
        core.log.error("failed to fetch limit.params.count object: ", err)
        return 500
    end

    core.log.info("conf.key:", conf.key)
    local args = ngx.req.get_uri_args()
    -- 获取设置的key作为uri参数的值。
    local value = args[conf.key] or ""
    core.log.info("limit key's value: ", value)

    -- 如果uri参数没有匹配，跳过
    if value == "" then
        return
    end

    local count
    local window
    for _, p in ipairs(conf.policy) do
        core.log.info("policy ", p.value, " ", value)
        if p.value == value then
            count = p.count
            window = p.time_window
        end
    end

    core.log.info("count:", count, " window:", window)
    if count == nil or window == nil then
        return
    end

    local store_key = conf.key .. "-" .. (conf.group or "") .. "-" .. value
    core.log.info("store key:", store_key)
    local delay, remaining = lim:incoming(store_key, count, window, true)
    if not delay then
        local err = remaining
        if err == "rejected" then
            return conf.rejected_code
        end

        core.log.error("failed to limit req: ", err)
        return 500
    end

    core.response.set_header("X-RateLimit-Limit", conf.count,
            "X-RateLimit-Remaining", remaining)
end

return _M
