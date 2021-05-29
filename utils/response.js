const format = (error, msg, data) => {
    console.log(msg)
    return {error, msg, data}
}

module.exports = {
    format
}
