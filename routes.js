const express = require('express')

const searchArticleController = require('./search-article/controllers')
const articleController = require('./article/controllers')

const article = express.Router()

article.get('/', searchArticleController.getArticles)

article.post('/', articleController.addArticle)

module.exports = {
    article
}
