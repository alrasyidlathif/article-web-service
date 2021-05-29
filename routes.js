const express = require('express')

const queryArticleController = require('./query/controllers/article')
const commandArticleController = require('./command/controllers/article')

const article = express.Router()

article.get('/', queryArticleController.getArticles)

article.post('/', commandArticleController.addArticle)

module.exports = {
    article
}
