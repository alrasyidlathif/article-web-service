const Sequelize = require('sequelize')

const CreatedArticle = require('../../models/createdArticle')

const fetchArticleById = async (id) => {
    try {
        const data = await CreatedArticle.findAll({
            where: {
                id: {
                    [Sequelize.Op.gt]: id
                }
            },
            order: [
                ['id', 'ASC']
            ]
        })
        return data
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = {
    fetchArticleById
}
