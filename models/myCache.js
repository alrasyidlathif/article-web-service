const NodeCache = require("node-cache")

const envi = require('../configs/envi')

const cacheStorage = new NodeCache({stdTTL: envi.cache.ttl})

class ArticleCache {
    constructor(key, value) {
        this.key = key
        this.value = value
    }

    save() {
        cacheStorage.set(this.key, this.value, (err, success) => {
            if (!err && success) {
                console.log('success save cache')
            }
            console.log('failed save cache')
        })
    }

    static load(key) {
        try {
            const value = cacheStorage.get(key, true)
            if (!value) {
                return null
            }
            return value
        } catch (error) {
            console.log(error)
            return null
        }
    }
}

module.exports = {
    ArticleCache
}
