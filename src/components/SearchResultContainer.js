import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import API from "../utils/API";

class SearchResultContainer extends Component {
  state = {
    search: "",
    results: [],
    filtered: [],
    sortAsc: true,
    order: "descending",
  };

  componentDidMount() {
    this.searchEmployee();
  }

  searchEmployee = () => {
    API.search()
      .then((res) => {
        this.setState({
          results: res.data.results,
          filtered: res.data.results
        });
      })
      .catch((err) => console.log(err));
  };

  
  handleInputChange = (event) => {
    this.setState({
      search: event.target.value
    });

    let filterArray = this.state.results.filter(person => {
      //grab name
      let name = person.name.first.toLowerCase()
      //is letter typing inside name
      //if there then return it to filtered array
      return name.indexOf(event.target.value) !== -1
    })
    this.setState({
      //set filter with filter array just sent in
      filtered: filterArray
    })
  };

  // When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit = (event) => {
    event.preventDefault();
    this.searchEmployee(this.state.search);
  };

  sortByName = () => {
    //swap the order
    console.log(this.state.filtered)
    if (this.state.sortAsc) {
     this.state.filtered.sort(function (a, b) {
       if(a.name.first.toUpperCase() > b.name.first.toUpperCase()){
         return 1
       }else{
         return -1
       }        
      });
      this.setState({
        sortAsc: !this.state.sortAsc
      })
    } else {
      //update the boolean
     
      //sort the array the other way
      console.log("Sorting array");
      this.state.filtered.sort(function (a, b) {
        if(b.name.first.toUpperCase() > a.name.first.toUpperCase()){
          return 1
        }else{
          return -1
        }        
      });
      this.setState({
        sortAsc: !this.state.sortAsc
      })
    }
    // console.log("Sorted Array", newArray);
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
        <ResultList results={this.state.filtered} handleSort={this.sortByName} />{" "}
      </div>
    );
  }
}

export default SearchResultContainer;
