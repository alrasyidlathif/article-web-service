const Sequelize = require('sequelize')

const db = require('../database')

const Article = db.define('article', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
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
        type: Sequelize.DATE,
        allowNull: false
    }
})

module.exports = Article
