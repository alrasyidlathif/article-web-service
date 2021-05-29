const format = (error, msg, data) => {
    console.log(msg)
    if (data) return {error, msg, data}
    return {error, msg}
}

module.exports = {
    format
}
