const Sequelize = require('sequelize')

const db = require('../configs/database')

const Article = db.define('articles',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: false,
            allowNull: false,
            primaryKey: true
        },
        author: {
            type: Sequelize.STRING,
            allowNull: false
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        body: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        created: {
            type: 'TIMESTAMP',
            allowNull: false
        }
    },
    {
        indexes: [
            {unique: false, fields:['author']},
            {unique: true, fields:['title']}
        ]
    }
)

module.exports = Article
