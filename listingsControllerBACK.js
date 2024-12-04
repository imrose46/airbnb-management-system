// controllers/listingsController.js
const { getDBConnection } = require('../db');

async function getListings(req, res) {
    let connection;
    try {
        connection = await getDBConnection();
        const result = await connection.execute(
            `SELECT * FROM listings`
        );
        const listings = result.rows; // rows contain the data fetched from the database
        res.json(listings); // Return the listings as a JSON response
    } catch (error) {
        console.error("Error fetching listings:", error);
        res.status(500).json({ message: 'Error fetching listings' });
    } finally {
        if (connection) {
            try {
                await connection.close();
            } catch (err) {
                console.error("Error closing connection:", err);
            }
        }
    }
}

module.exports = { getListings };
