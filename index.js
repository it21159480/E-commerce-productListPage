
const express = require("express");

const dotenv = require("dotenv");

const connectDB = require("./config/dbcongif")

const app = express();

const cors = require("cors");

app.use(cors());

// Initialize dotenv to read the environment variables from .env file
const PORT = process.env.PORT || 8080;

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
connectDB();

// Parse JSON request bodies
app.use(express.json());

// Set up your routes
app.use('/',require('./route/productsRoute'));


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });