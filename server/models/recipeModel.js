'use strict';
// Import mongoose
const mongoose = require("mongoose");

// Declare schema and assign Schema class
const Schema = mongoose.Schema;

// Create Schema Instance and add schema propertise
const RecipeSchema = new Schema({
    recipe_title: {
        type: String,
    },
    recipe_description: {
        type: String,
    },
    recipe_ingredients: {
        type: String,
    },
    recipe_instructions: {
        type: String,
    },
    recipe_category: {
        type: String
    },
    createdOn: {
        type: Date,
        default: Date.now
    }
});

// create and export model
module.exports = mongoose.model("recipes", RecipeSchema);