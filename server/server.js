'use strict';

// require express and bodyParser
const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors')

// Import DB Connection
require("./config/db");

// create express app
const app = express();

// define port to run express app
const port = process.env.PORT || 4000;

// use bodyParser middleware on express app
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors()) // Use this after the variable declaration

// Add endpoint
app.get('/', (req, res) => {
    res.send("Hello World");
});

// Import API route
const routes = require('./routes/recipeRoutes'); //importing route
routes(app);

// Listen to server
app.listen(port, () => {

    console.log(`Server running at http://localhost:${port}`);
});