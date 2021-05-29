const Sequelize = require('sequelize')

const envi = require('./config/envi')

const sequelize = new Sequelize(envi.db.name, envi.db.user, envi.db.pwd, {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = sequelize
