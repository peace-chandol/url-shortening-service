const mysql = require('mysql')

const connectDB = async () => {
    const mySqlDB = await mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: 'peace',
        database: 'url_shortening_service',
        port: 3306
    })
    return mySqlDB
}

module.exports = connectDB