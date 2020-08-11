import React, { Component } from "react";
// import "../../src/style"

const name = document.getElementById("name");

class ResultList extends Component {
     //setting state to track ascending or descending, new array of sorted
  state = {
    filterUsers: [{}],
    order: "descending",
    users: [{}],
  };

 
  //toggles between the states
  sort = function sortOrder() {
    if (this.state.order === "descending") {
      this.setState({
        order: "ascending",
      });
    } else {
      this.setState({
        order: "descending",
      });
    }
  };

  orderLogic(arr) {
      console.log(arr)
    function compare(a, b) {
      var nameA = a.name.first.toUpperCase(); // ignore upper and lowercase
      var nameB = b.name.first.toUpperCase(); // ignore upper and lowercase
      if (nameA > nameB) {
        return this.state.order === "ascending" ? -1 : 1;
      }
      if (a.name.first < b.name.first) {
        return this.state.order === "descending" ? -1 : 1;
      }
      // a must be equal to b
      return 0;
    }
    return arr.sort(compare);
  }

  render() {
    return (
      <div>
        <table className="table table-bordered table-sortable">
          <thead>
            <tr>
              <th> Picture </th>
              <th id="name"><button type="button" onClick={() => {
                  console.log("Name Search Clicked")
                  this.orderLogic(this.props.results)
                }}// className={getClassNamesFor('name')}
              >First Name</button>
              </th>
              <th>
                <button
                  type="button"
                  // onClick={() => requestSort('price')}
                  // className={getClassNamesFor('price')}
                >
                  Last Name
                </button>
              </th>
              <th>
                <button
                  type="button"
                  // onClick={() => requestSort('stock')}
                  // className={getClassNamesFor('stock')}
                >
                  Email
                </button>
              </th>
              <th>
                <button
                  type="button"
                  // onClick={() => requestSort('stock')}
                  // className={getClassNamesFor('stock')}
                >
                  Phone
                </button>
              </th>
              <th>
                <button
                  type="button"
                  // onClick={() => requestSort('stock')}
                  // className={getClassNamesFor('stock')}
                >
                  Age
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {this.props.results.map(function (item, i) {
              return (
                <tr key={item.name.last}>
                  <td>
                    
                    <img src={item.picture.thumbnail} />
                  </td>
                  <td> {item.name.first} </td> <td> {item.name.last} </td>
                  <td> {item.email} </td> <td> {item.phone} </td>
                  <td> {item.registered.age} </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ResultList;

