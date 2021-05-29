const Sequelize = require('sequelize')

const Article = require('../../models/article')

const fetchArticle = async () => {
    try {
        const data = await Article.findAll({
            order: [
                ['created', 'DESC']
            ]
        })
        return data
    } catch (error) {
        throw new Error(error)
    }
}

const fetchArticleByAuthor = async (author) => {
    try {
        const data = await Article.findAll({
            where: {
                author
            },
            order: [
                ['created', 'DESC']
            ]
        })
        return data        
    } catch (error) {
        throw new Error(error)
    }
}

const fetchArticleByKeyword = async (keyword) => {
    try {
        const data = await Article.findAll({
            where: {
                [Sequelize.Op.or]: [
                    {
                        title: {
                            [Sequelize.Op.like]: `%${keyword}%`
                        }
                    },
                    {
                        body: {
                            [Sequelize.Op.like]: `%${keyword}%`
                        }
                    }
                ]
            },
            order: [
                ['created', 'DESC']
            ]
        })
        return data        
    } catch (error) {
        throw new Error(error)
    }
}

const fetchArticleByAuthorAndKeyword = async (author, keyword) => {
    try {
        const data = await Article.findAll({
            where: {
                [Sequelize.Op.and]: [
                    {
                        author
                    },
                    {
                        [Sequelize.Op.or]: [
                            {
                                title: {
                                    [Sequelize.Op.like]: `%${keyword}%`
                                }
                            },
                            {
                                body: {
                                    [Sequelize.Op.like]: `%${keyword}%`
                                }
                            }
                        ]
                    }
                ]
            },
            order: [
                ['created', 'DESC']
            ]
        })
        return data        
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = {
    fetchArticle,
    fetchArticleByAuthor,
    fetchArticleByKeyword,
    fetchArticleByAuthorAndKeyword
}
