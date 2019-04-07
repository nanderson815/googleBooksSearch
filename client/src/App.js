import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./components/pages/Search";
import "./App.css";

import Nav from "./components/Nav/Nav";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Nav />
            <div className="container">
              <Route exact path="/" component={Search} />
              <Route exact path="/search" component={Search} />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
