const generate = (query) => {
    const author = query.author ? query.author : ''
    const keyword = query.keyword ? query.keyword : ''
    const key = `a=${author}&k=${keyword}`
    return key
}

module.exports = {
    generate
}
