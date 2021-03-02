import React, { Component } from 'react';
import axios from 'axios';

export default class EditRecipe extends Component {

    constructor(props) {
        super(props);

        this.onChangeRecipeTitle = this.onChangeRecipeTitle.bind(this);
        this.onChangeRecipeDescription = this.onChangeRecipeDescription.bind(this);
        this.onChangeRecipeIngredients = this.onChangeRecipeIngredients.bind(this);
        this.onChangeRecipeInstructions = this.onChangeRecipeInstructions.bind(this);
        this.onChangeRecipeCategory = this.onChangeRecipeCategory.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onDelete = this.onDelete.bind(this);

        this.state = {
            recipe_title: '',
            recipe_description: '',
            recipe_ingredients: '',
            recipe_instructions: '',
            recipe_category: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/recipe/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    recipe_title: response.data.recipe_title,
                    recipe_description: response.data.recipe_description,
                    recipe_ingredients: response.data.recipe_ingredients,
                    recipe_instructions: response.data.recipe_instructions,
                    recipe_category: response.data.recipe_category
                })
            })
            .catch(function (error) {
                console.log(error);
            })
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
        const obj = {
            recipe_title: this.state.recipe_title,
            recipe_description: this.state.recipe_description,
            recipe_ingredients: this.state.recipe_ingredients,
            recipe_instructions: this.state.recipe_instructions,
            recipe_category: this.state.recipe_category
        };
        console.log(obj);
        axios.put('http://localhost:4000/recipe/' + this.props.match.params.id, obj)
            .then(res => console.log(res.data));

        this.props.history.push('/');
    }

    onDelete(e) {
        axios.delete('http://localhost:4000/recipe/' + this.props.match.params.id)
            .then(res => console.log(res.data));
    }

    render() {
        return (
            <div>
                <h3 align="center">Update Recipe</h3>
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



                    <br />

                    <div className="form-group">
                        <input type="submit" value="UPDATE" className="btn btn-primary" />
                    </div>

                    <div className="form-group">
                        <button onClick={this.onDelete} className="btn btn-danger">DELETE</button>
                    </div>
                </form>
            </div>
        )
    }
}