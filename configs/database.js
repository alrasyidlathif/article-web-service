const Sequelize = require('sequelize')

const envi = require('./envi')

const sequelize = new Sequelize(envi.db.name, envi.db.user, envi.db.pwd, {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    define: {
        timestamps: false
    },
    timezone: '+07:00'
})

module.exports = sequelize
