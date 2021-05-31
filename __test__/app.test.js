const request = require('supertest')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const routes = require('../routes')

const app = express()

app.use(bodyParser.json())
app.use(cors())

app.use('/articles', routes.article)

describe('testing endpoint', () => {
    it('GET /notfound 404', () => {
        return request(app).get('/notfound')
            .expect(404)
    })
    it('GET /articles 200', () => {
        return request(app).get('/articles')
            .expect(200)
    })
    it('POST /articles 400', () => {
        const payload = {"author":"lathif"}
        return request(app).post('/articles')
            .send(payload)
            .expect(400)
    })
    it('POST /articles 201', () => {
        const payload = {
            "author":"lathif",
            "title":"node for beginner",
            "body":"awesome book for learning node"
        }
        return request(app).post('/articles')
            .send(payload)
            .expect(201)
    })
})
