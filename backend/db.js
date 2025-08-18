// db.js (now environment driven)
const mysql = require('mysql');

const dbConfig = {
    host: process.env.DB_HOST || 'b0wfogeparw9tbiqltdk-mysql.services.clever-cloud.com',
    user: process.env.DB_USER || 'uc7re1qyvlgndxfc',
    password: process.env.DB_PASS || 'oZnz8f4VAR5MSl4lutJ5',
    database: process.env.DB_NAME || 'b0wfogeparw9tbiqltdk',
    acquireTimeout: 60000,
    timeout: 60000,
    multipleStatements: false // disable multi statements for security
};

const db = mysql.createPool({
    ...dbConfig,
    connectionLimit: parseInt(process.env.DB_POOL_LIMIT || '10', 10),
    queueLimit: 0
});

db.getConnection((err, connection) => {
    if (err) {
        console.error('MySQL connection error!', err.code);
    } else {
        console.log('MySQL connected');
        connection.release();
    }
});

module.exports = db;
