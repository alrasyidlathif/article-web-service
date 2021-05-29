const express = require('express')
const bodyParser = require('body-parser')

const db = require('./database')
const routes = require('./routes')

const app = express()

app.use(bodyParser.urlencoded({extended: false}))

app.use('/articles', routes.article)

app.use('/', (req, res) => {
    return res.status(404).send("not found")
})

app.listen(3000, 'localhost', () => {
    console.log('server running on port 3000')
})
