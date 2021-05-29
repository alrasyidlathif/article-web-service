const Sequelize = require('sequelize')

const sequelize = new Sequelize('db name', 'db user', 'db pwd', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = sequelize
