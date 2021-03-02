'use strict';

// require express and bodyParser
const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const path = require("path");

// Import DB Connection
require("./config/db");

// define port to run express app
const port = process.env.PORT || 4000;

// create express app
const app = express();

// use bodyParser middleware on express app
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors()) // Use this after the variable declaration
app.use(express.static(path.join(__dirname, "client", "build")))

// Add endpoint
app.get('/', (req, res) => {
    res.send("Hello World");
});

// Import API route
const routes = require('./routes/recipeRoutes'); //importing route
routes(app);

// Get your Express app to serve up your React app
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

// Listen to server
app.listen(port, () => {

    console.log(`Server running at http://localhost:${port}`);
});