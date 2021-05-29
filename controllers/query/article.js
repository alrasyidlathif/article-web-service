const articleModel = require('../../models/article')

const getArticles = async (req, res, next) => {
    res.status(200).send('ok')
}

module.exports = {
    getArticles
}
