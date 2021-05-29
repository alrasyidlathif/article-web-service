const ArticleCache = require('../models/myCache')
const cacheKey = require('../utils/cacheKey')
const response = require('../utils/response')

const saveCache = (req, res, next) => {
    const key = cacheKey.generate(req.query)
    const data = res.locals.toCache
    const ac = new ArticleCache(key, data)
    ac.save((msg) => {
        console.log(msg)
    })
}

const loadCache = (req, res, next) => {
    const key = cacheKey.generate(req.query)
    ArticleCache.load(key, (value) => {
        if (value) {
            console.log('load data from cache')
            return res.status(200).send(response.format('00', 'cache', value))
        }
        console.log('data not found in cache')
        return next()
    })
}

module.exports = {
    saveCache,
    loadCache
}
