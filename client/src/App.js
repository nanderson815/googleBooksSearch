import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./components/pages/Search";
import Saved from "./components/pages/Saved";
import "./App.css";
import API from "./Utils/API";
import axios from "axios";

import Nav from "./components/Nav/Nav";

class App extends Component {
  state = {
    result: [],
    search: "",
    savedBooks: []
  }

  componentDidMount() {
    this.getBooks();
  }

  searchBooks = query => {
    API.search(query)
      .then(res => this.setState({ result: res.data.items }))
      .catch(err => console.log(err));
  }

  getBooks = () => {
    axios.get("/api/book")
      .then((res) => this.setState({ savedBooks: res.data }))
  }

  deleteBook = id => {
    axios.delete(`/api/book/${id}`)
      .then( () => {
        this.getBooks();
      })
  }

  saveBooks = id => {
    const book = this.state.result[id];

    const newBook = {
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail,
      link: book.volumeInfo.infoLink
    }

    axios.post("/api/book", newBook)
      .then(res => console.log(res.data))
      .then(() => {
        alert("Book Saved!")
        this.getBooks();
      });

  }

  handleInputChange = event => {
    const value = event.target.value;
    this.setState({ search: value });

  }

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBooks(this.state.search);
    this.setState({ search: "" });
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
                  data={this.state.result}
                  save={this.saveBooks} />} />

              <Route exact path="/saved" render={() => <Saved
                data={this.state.savedBooks}
                delete={this.deleteBook}
              />} />

            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
