// import Recipe Model
const Recipe = require("../models/recipeModel");

// DEFINE CONTROLLER FUNCTIONS

exports.listAllRecipes = (req, res) => {
    Recipe.find({}, (err, recipe) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(recipe);
    });
};

exports.findRecipe = (req, res) => {
    let id = req.params.id;
    Recipe.findById(id, function (err, recipe) {
        res.json(recipe);
    });
};

exports.createNewRecipe = (req, res) => {
    let newRecipe = new Recipe(req.body);
    newRecipe.save((err, recipe) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(201).json(recipe);
    });
};

exports.updateRecipe = (req, res) => {
    Recipe.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, recipe) => {
        if (err) {
            res.status(500).send("data is not found");
        }
        res.status(200).json(recipe);
    });
};

exports.deleteRecipe = async (req, res) => {
    await Recipe.deleteOne({ _id: req.params.id }, (err) => {
        if (err) {
            return res.status(404).send(err);
        }
        res.status(200).json({ message: "Recipe successfully deleted" });
    });
};