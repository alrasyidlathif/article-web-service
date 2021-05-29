const NodeCache = require("node-cache")

const cacheStorage = new NodeCache()

class ArticleCache {
    constructor(key, value, ttl) {
        this.key = key
        this.value = value
        this.ttl = ttl
    }

    save(cb) {
        const success = cacheStorage.set(this.key, this.value, this.ttl)
        if (success) return cb('success save cache')
        return cb('failed save cache')
    }

    static load(key, cb) {
        try {
            const value = cacheStorage.get(key, true)
            if (!value) {
                return cb(null)
            }
            return cb(value)
        } catch (error) {
            console.log(error)
            return cb(null)
        }
    }
}

module.exports = ArticleCache
