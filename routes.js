const express = require('express')

const queryArticleController = require('./controllers/query/article')
const commandArticleController = require('./controllers/command/article')

const article = express.Router()

article.get('/', queryArticleController.getArticles)

article.post('/', commandArticleController.addArticle)

module.exports = {
    article
}
