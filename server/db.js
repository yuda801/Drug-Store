import mysql from 'mysql2';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'pharmacy',
    password: '123456'
})

export default connection;