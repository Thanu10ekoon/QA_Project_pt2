// db.js
const mysql = require('mysql');
require('dotenv').config();

const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    acquireTimeout: 60000,
    timeout: 60000,
    reconnect: true,
    
};

// Basic validation to help debugging env issues
['DB_HOST','DB_USER','DB_PASS','DB_NAME'].forEach(k => {
    if (!process.env[k]) {
        console.warn(`[WARN] Environment variable ${k} not set`);
    }
});

// Use connection pool for better connection management
const db = mysql.createPool({
    ...dbConfig,
    connectionLimit: 10,
    queueLimit: 0
});

// Test initial connection
db.getConnection((err, connection) => {
    if (err) {
        console.error('MySQL connection error!', err);
    } else {
        console.log('MySQL connected');
        connection.release();
    }
});

// Export db
module.exports = db;
