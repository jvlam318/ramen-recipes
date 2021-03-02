import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default class ViewRecipe extends Component {

    constructor(props) {
        super(props);
        this.state = {
            recipe_title: '',
            recipe_description: '',
            recipe_ingredients: '',
            recipe_instructions: '',
            recipe_category: ''
        };
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

    render() {
        return (
            <div>
                <Link to={"/edit/" + this.state._id}>Edit</Link>
                <p>{this.state.recipe_title}</p>
                <p>{this.state.recipe_description}</p>
                <p>{this.state.recipe_ingredients}</p>
                <p>{this.state.recipe_instructions}</p>
                <p>{this.state.recipe_category}</p>
            </div>
        )
    }
}