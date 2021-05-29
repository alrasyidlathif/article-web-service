const express = require('express')

const app = express()

app.use('/', (req, res) => {
    return res.status(200).send("ok")
})

app.listen(3000, 'localhost', () => {
    console.log('server running on port 3000')
})
