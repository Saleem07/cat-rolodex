import React, { Component } from "react";

import "./App.css";

import CardList from "./components/card-list/card-list.components";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      cats: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ cats: users }));
  }

  handleChange = (e) => this.setState({ searchField: e.target.value });

  render() {
    const { cats, searchField } = this.state;
    const filteredCats = cats.filter((cat) =>
      cat.name.toLowerCase().includes(searchField.toLowerCase())
    );
    console.log(filteredCats);
    return (
      <div className="App">
      <h1 className = 'head'>Cat Rolodex</h1>
        <SearchBox
          placeholder="search me hooman"
          handleChange={this.handleChange}
        />
        <CardList cats={filteredCats} />
      </div>
    );
  }
}
export default App;

