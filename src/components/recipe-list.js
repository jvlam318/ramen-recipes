import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Recipe = props => (
    <tr>
        <td>{props.recipe.recipe_title}</td>
        <td>{props.recipe.recipe_description}</td>
        <td>{props.recipe.recipe_category}</td>
        <td>
            <Link to={"/recipe/" + props.recipe._id}>View</Link>
        </td>
    </tr>
)

export default class RecipeList extends Component {

    constructor(props) {
        super(props);
        this.state = { recipes: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/recipes/')
            .then(response => {
                this.setState({ recipes: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    recipeList() {
        return this.state.recipes.map(function (currentRecipe, i) {
            return <Recipe recipe={currentRecipe} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Recipes</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Category</th>
                            <th>Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.recipeList()}
                    </tbody>
                </table>
            </div>
        )
    }
}