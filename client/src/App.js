import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Nav from "./components/Nav/Nav";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Nav />
        </Router>
      </div>
    );
  }
}

export default App;
