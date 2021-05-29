const response = require('../../utils/response')
const articleService = require('../services/article')

const addArticle = async (req, res, next) => {
    const {author, title, body} = req.body
    if (!author || !title || !body ) {
        return res.status(400).send(response.format('99', 'wrong input'))
    }
    
    try {
        await articleService.createArticle(author, title, body)
        return res.status(200).send(response.format('00', 'success', {
            author, title, body
        }))
    } catch (error) {
        console.log(error)
        return res.status(500).send(response.format('99', 'failed'))
    }
}

module.exports = {
    addArticle
}
