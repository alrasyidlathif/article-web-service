articleModel = require('../models/article')

const addArticle = async (req, res, next) => {
    res.status(200).send('ok')
}

module.exports = {
    addArticle
}
