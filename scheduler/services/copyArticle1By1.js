const Article = require('../../models/article')

const copy = async (data) => {
    const all = data.length
    let success = 0
    try {
        for (let dt of data) {
            await Article.create({
                id: dt.dataValues.id,
                author: dt.dataValues.author,
                title: dt.dataValues.title,
                body: dt.dataValues.body,
                created: dt.dataValues.created
            })
            success = success+1
        }

        return {success, all}
    } catch (error) {
        console.log(error)
        return {success, all}
    }
}

module.exports = {
    copy
}
