const Article = require('../../models/article')

const getMaxId = async () => {
    try {
        const data = await Article.max('id')
        return data
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = {
    getMaxId
}
