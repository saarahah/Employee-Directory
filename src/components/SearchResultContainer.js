import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import API from "../utils/API";

class SearchResultContainer extends Component {
  state = {
    search: "",
    results: [],
    order: "descending",
  };

  // When this component mounts, search the Giphy API for pictures of kittens
  componentDidMount() {
    this.searchEmployee();
  }

  searchEmployee = (query) => {
    API.search()
      .then((res) => {
        this.setState({
          results: res.data.results,
        });
      })
      .catch((err) => console.log(err));
  };

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  // When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit = (event) => {
    event.preventDefault();
    this.searchEmployee(this.state.search);
  };

  // //toggles between the states
  sort = () => {
    if (this.state.order === "descending") {
      this.setState({
        order: "ascending",
      });
    } else {
      //update the boolean
      this.setState({
        order: "descending",
      });
    }
  };

  sortByName = (array) => {
    let newArray = [];
    //swap the order
    if (this.state.order === "descending") {
      console.log("It is descending");
      this.setState({
        order: "ascending",
      });
      //sort the array
      console.log("Sorting array");
      newArray = array.sort(function (a, b) {
        return a.name.first.toUpperCase() - b.name.first.toUpperCase();
      });
    } else {
      //update the boolean
      this.setState({
        order: "descending",
      });
      //sort the array the other way
      console.log("Sorting array");
      newArray = array.sort(function (a, b) {
        return b.name.first.toUpperCase() - a.name.first.toUpperCase();
      });
    }
    console.log("Sorted Array", newArray);
  };

  //   orderLogic(state,arr) {

  //     function compare(a, b) {
  //       var nameA = a.name.first.toUpperCase(); // ignore upper and lowercase
  //       var nameB = b.name.first.toUpperCase(); // ignore upper and lowercase
  //       if (nameA > nameB) {
  //         return state.order === "ascending" ? -1 : 1;
  //       }
  //       if (a.name.first < b.name.first) {
  //         return state.order === "descending" ? -1 : 1;
  //       }
  //       // a must be equal to b
  //       return 0;
  //     }
  //     return arr.sort(compare);
  //   }

  render() {
    return (
      <div>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />{" "}
        <ResultList results={this.state.results} handleSort={this.sortByName} />{" "}
      </div>
    );
  }
}

export default SearchResultContainer;
