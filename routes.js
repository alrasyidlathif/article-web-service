const express = require('express')

const article = express.Router()

article.get('/', (req, res, next) => {
    console.log('get')
})

article.post('/', (req, res, next) => {
    console.log('post')
})

module.exports = {
    article
}
