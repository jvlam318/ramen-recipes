import React, { Component } from 'react';
import axios from 'axios';

export default class CreateTodo extends Component {

    constructor(props) {
        super(props);

        this.onChangeRecipeTitle = this.onChangeRecipeTitle.bind(this);
        this.onChangeRecipeDescription = this.onChangeRecipeDescription.bind(this);
        this.onChangeRecipeIngredients = this.onChangeRecipeIngredients.bind(this);
        this.onChangeRecipeInstructions = this.onChangeRecipeInstructions.bind(this);
        this.onChangeRecipeCategory = this.onChangeRecipeCategory.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            recipe_title: '',
            recipe_description: '',
            recipe_ingredients: '',
            recipe_instructions: '',
            recipe_category: 'noodles'
        }
    }

    onChangeRecipeTitle(e) {
        this.setState({
            recipe_title: e.target.value
        });
    }

    onChangeRecipeDescription(e) {
        this.setState({
            recipe_description: e.target.value
        });
    }

    onChangeRecipeIngredients(e) {
        this.setState({
            recipe_ingredients: e.target.value
        });
    }

    onChangeRecipeInstructions(e) {
        this.setState({
            recipe_instructions: e.target.value
        });
    }

    onChangeRecipeCategory(e) {
        this.setState({
            recipe_category: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`Recipe Title: ${this.state.recipe_title}`);
        console.log(`Recipe Description: ${this.state.recipe_description}`);
        console.log(`Recipe Ingredients: ${this.state.recipe_ingredients}`);
        console.log(`Recipe Instructions: ${this.state.recipe_instructions}`);
        console.log(`Recipe Category: ${this.state.recipe_category}`);

        const newRecipe = {
            recipe_title: this.state.recipe_title,
            recipe_description: this.state.recipe_description,
            recipe_ingredients: this.state.recipe_ingredients,
            recipe_instructions: this.state.recipe_instructions,
            recipe_category: this.state.recipe_category
        };

        axios.post('http://localhost:4000/recipes', newRecipe)
            .then(res => console.log(res.data));

        this.setState({
            recipe_title: '',
            recipe_description: '',
            recipe_ingredients: '',
            recipe_instructions: '',
            recipe_category: ''
        })
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3>Create New Recipe</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Title: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.recipe_title}
                            onChange={this.onChangeRecipeTitle}
                        />
                    </div>
                    <div className="form-group">
                        <label>Recipe Description: </label>
                        <textarea
                            type="text"
                            className="form-control"
                            value={this.state.recipe_description}
                            onChange={this.onChangeRecipeDescription}
                        />
                    </div>
                    <div className="form-group">
                        <label>Recipe Ingredients: </label>
                        <textarea
                            type="text"
                            className="form-control"
                            value={this.state.recipe_ingredients}
                            onChange={this.onChangeRecipeIngredients}
                        />
                    </div>
                    <div className="form-group">
                        <label>Recipe Instructions: </label>
                        <textarea
                            type="text"
                            className="form-control"
                            value={this.state.recipe_instructions}
                            onChange={this.onChangeRecipeInstructions}
                        />
                    </div>
                    <div className="form-group">
                        <label>Recipe Category: </label>
                        <select
                            id="categories"
                            name="categories"
                            className="form-control"
                            value={this.state.recipe_category}
                            onChange={this.onChangeRecipeCategory}
                        >
                            <option value="noodles">Noodles</option>
                            <option value="soup">Soup</option>
                            <option value="tare">Tare</option>
                            <option value="toppings">Toppings</option>
                            <option value="aroma-oil">Aroma Oil</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Recipe" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}