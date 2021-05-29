const articleService = require('./services/article')
const createdarticleService = require('./services/createdArticle')

const copyArticle = async () => {
    try {
        let maxId = await articleService.getMaxId()
        if (!maxId) maxId = 2
        const data = await createdarticleService.fetchArticleById(maxId)
        if (data.length > 0) {
            
        }
        console.log('SUCCESS COPY ARTICLE')
    } catch (error) {
        console.log(error)
        console.log('ERROR COPY ARTICLE')
    }
}

module.exports = {
    copyArticle
}
