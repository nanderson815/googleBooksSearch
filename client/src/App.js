import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./components/pages/Search";
import "./App.css";
import API from "./Utils/API";

import Nav from "./components/Nav/Nav";

class App extends Component {
  state = {
    result: [],
    search: ""
  }

  searchBooks = query => {
    API.search(query)
      .then(res => this.setState({ result: res.data.items }))
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    const value = event.target.value;
    this.setState({ search: value});

  }

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBooks(this.state.search);
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Nav />
            <div className="container">

              <Route exact path="/(|search)" 
              render={() => <Search 
              click={this.handleFormSubmit} 
              change={this.handleInputChange} 
              val={this.state.search} 
              data={this.state.result}/>}/>

            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
