// app.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json()); // For parsing application/json
app.use(cors()); // Enable Cross-Origin Resource Sharing (CORS) for frontend to access API

// Routes
const listingsRoutes = require('./routes/listings');
app.use(listingsRoutes); // Use listings routes

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
