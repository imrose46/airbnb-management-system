// routes/listings.js
const express = require('express');
const router = express.Router();
const { getDBConnection } = require('../db');
const { getListings } = require('../controllers/listingsController');

// Get all listings
router.get('/api/listings', getListings);

module.exports = router;
