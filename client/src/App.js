import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import RecipeList from "./components/recipe-list";
import EditRecipe from "./components/edit-recipe";
import CreateRecipe from "./components/create-recipe";

import logo from "./logo.svg";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="https://codingthesmartway.com" target="_blank">
              <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" />
            </a>
            <Link to="/" className="navbar-brand">MERN-Stack Ramen Recipe App</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Recipe List</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Recipe</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br />
          <Route path="/" exact component={RecipeList} />
          <Route path="/recipe/:id" component={EditRecipe} />
          <Route path="/create" component={CreateRecipe} />
        </div>
      </Router>
    );
  }
}

export default App;