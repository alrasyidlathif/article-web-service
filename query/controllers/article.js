const response = require('../../utils/response')
const articleService = require('../services/article')

const getArticles = async (req, res, next) => {
    const {author, keyword} = req.query
    let data = []

    try {
        if (author && keyword) {
            data = await articleService.fetchArticleByAuthorAndKeyword(author, keyword)
        } else if (author) {
            data = await articleService.fetchArticleByAuthor(author)
        } else if (keyword) {
            data = await articleService.fetchArticleByKeyword(keyword)
        } else {
            data = await articleService.fetchArticle()
        }        
    } catch (error) {
        console.log(error)
        return res.status(500).send(response.format('99', 'failed'))
    }

    return res.status(200).send(response.format('00', 'success', data))
}

module.exports = {
    getArticles
}
