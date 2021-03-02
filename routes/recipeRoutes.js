'use strict';

// create App function
module.exports = function (app) {
    const recipeList = require('../controllers/recipeController');

    // recipeList Routes

    // get and post request for /recipes endpoints
    app
        .route("/recipes")
        .get(recipeList.listAllRecipes)
        .post(recipeList.createNewRecipe);

    // put and delete request for /recipes endpoints
    app
        .route("/recipe/:id")
        .get(recipeList.findRecipe)
        .put(recipeList.updateRecipe)
        .delete(recipeList.deleteRecipe);
};