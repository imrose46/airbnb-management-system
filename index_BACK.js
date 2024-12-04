// db/index.js
const oracledb = require('oracledb');
require('dotenv').config();

async function getDBConnection() {
    let connection;
    try {
        connection = await oracledb.getConnection({
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            connectString: `${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_SID}`
        });
        return connection;
    } catch (error) {
        console.error("Error getting DB connection:", error);
        throw error;
    }
}

module.exports = { getDBConnection };
