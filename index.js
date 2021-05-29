const express = require('express')
const bodyParser = require('body-parser')

const db = require('./configs/database')
const routes = require('./routes')

const app = express()

app.use(bodyParser.urlencoded({extended: false}))

app.use('/articles', routes.article)

app.use('/', (req, res) => {
    return res.status(404).send("not found")
})

db.sync()
.then(result => {
    app.listen(3000, 'localhost', () => {
        console.log('server running on port 3000')
    })
})
.catch(err => {
    console.log(err)
    process.exit(1)
})
