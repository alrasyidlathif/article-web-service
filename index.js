const express = require('express')
const bodyParser = require('body-parser')
const cron = require('node-cron')

const db = require('./configs/database')
const routes = require('./routes')
const { copyArticle } = require('./scheduler/autoTask')

const app = express()

app.use(bodyParser.json())

app.use('/articles', routes.article)

app.use('/', (req, res) => {
    return res.status(404).send("not found")
})

cron.schedule('* * * * *', () => {
    console.log('running a task every minute')
    copyArticle()
})

db.sync()
.then(result => {
    app.listen(3000, 'localhost', () => {
        console.log('server running on port 3000')
    })
})
.catch(err => {
    console.log(err)
    console.log('ERROR SYNC DB')
    process.exit(1)
})
