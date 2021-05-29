const Sequelize = require('sequelize')

const CreatedArticle = require('../../models/createdArticle')

const createArticle = async (author, title, body) => {
    try {
        const data = await CreatedArticle.create({
            author: author,
            title: title,
            body: body
        })
        return data
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = {
    createArticle
}
