const express = require('express')

const queryArticleController = require('./query/controllers/article')
const commandArticleController = require('./command/controllers/article')
const cache = require('./middleware/cache')

const article = express.Router()

article.get('/',
    cache.loadCache,
    queryArticleController.getArticles,
    cache.saveCache
)

article.post('/', commandArticleController.addArticle)

module.exports = {
    article
}
