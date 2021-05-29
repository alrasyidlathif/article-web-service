const dotenv = require('dotenv')
const path =  require('path')

dotenv.config({ path: path.join(__dirname, '.env') })

const ENV_VAR = [
    'DBNAME', 'DBUSER', 'DBPWD'
]

for (let i of ENV_VAR) {
    if (!process.env[i]) process.exit(1)
}

module.exports = {
    db: {
        name: process.env.DBNAME,
        user: process.env.DBUSER,
        pwd: process.env.DBPWD
    }
}
