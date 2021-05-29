const articleService = require('./services/article')
const createdArticleService = require('./services/createdArticle')
const copyArticleService = require('./services/copyArticle1By1')

const copyArticle = async () => {
    try {
        let maxId = await articleService.getMaxId()
        if (!maxId) maxId = 0
        const data = await createdArticleService.fetchArticleById(maxId)

        let success = 0
        let all = 0
        if (data.length > 0) {
            const result = await copyArticleService.copy(data)
            success = result.success
            all = result.all
        }

        console.log(`SUCCESS COPY ${success}/${all} ARTICLE`)
    } catch (error) {
        console.log(error)
        console.log('ERROR COPY ARTICLE')
    }
}

module.exports = {
    copyArticle
}
