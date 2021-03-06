const dotenv = require('dotenv')
const path =  require('path')

dotenv.config({ path: path.join(process.cwd(), '.env') })

const ENV_VAR = ['DBNAME', 'DBUSER', 'DBPWD', 'CACHETTL', 'DBHOST', 'DBROOTPWD']

for (let i of ENV_VAR) {
    if (!process.env[i]) {
        console.log('env missing')
        process.exit(1)
    }
}

const db = {
    name: process.env.DBNAME,
    user: process.env.DBUSER,
    pwd: process.env.DBPWD,
    host: process.env.DBHOST
}

const cache = {
    ttl: process.env.CACHETTL
}

module.exports = {
    db,
    cache
}
