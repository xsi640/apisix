local limit_local_new = require("resty.limit.count").new
local core = require("apisix.core")
local plugin_name = "limit-count-params"
local limit_redis_new
local ngx = ngx
do
    local redis_src = "apisix.plugins.limit-count.limit-count-params-redis"
    limit_redis_new = require(redis_src).new
end

local schema = {
    type = "object",
    properties = {
        count = { type = "integer", minimum = 0 },
        time_window = { type = "integer", minimum = 0 },
        key = { type = "string", minLength = 2 },
        group = { type = "string" },
        rejected_code = { type = "integer", minimum = 200, maximum = 600 },
        policy = {
            type = "string",
            enum = { "local", "redis" },
        },
        redis = {
            type = "object",
            properties = {
                host = {
                    type = "string", minLength = 2
                },
                port = {
                    type = "integer", minimum = 1
                },
                database = {
                    type = "integer", minimum = 0
                },
                timeout = {
                    type = "integer", minimum = 1
                },
            },
            required = { "host" },
        },
    },
    additionalProperties = false,
    required = { "count", "time_window", "key", "rejected_code" },
}

local _M = {
    version = 0.1,
    priority = 5000,
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
        conf.policy = "local"
    end

    if conf.policy == "redis" then
        if not conf.redis then
            return false, "missing valid redis options"
        end

        conf.redis.port = conf.redis.port or 6379
        conf.redis.database = conf.redis.database or 0
        conf.redis.timeout = conf.redis.timeout or 1000
    end

    return true
end

local function create_limit_obj(conf)
    core.log.info("create new limit-count-params plugin instance")

    if not conf.policy or conf.policy == "local" then
        return limit_local_new("plugin-limit-count", conf.count,
                conf.time_window)
    end

    if conf.policy == "redis" then
        return limit_redis_new("plugin-" .. plugin_name,
                conf.count, conf.time_window, conf.redis)
    end

    return nil
end

function _M.access(conf, ctx)
    core.log.info("ver: ", ctx.conf_version)
    local lim, err = core.lrucache.plugin_ctx("limit-count", ctx,
            create_limit_obj, conf)
    if not lim then
        core.log.error("failed to fetch limit.params.count object: ", err)
        return 500
    end

    local args = ngx.req.get_uri_args()
    -- 获取设置的key作为uri参数的值。
    local value = args[conf.key] or ""
    core.log.info("limit key's value: ", value)

    -- 如果uri参数没有匹配，跳过
    if value == "" then
        return
    end

    local store_key = conf.key .. "-" .. (conf.group or "") .. "-" .. value

    local delay, remaining = lim:incoming(store_key, true)
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
