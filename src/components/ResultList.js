import React, { Component } from "react";
// import "../../src/style"

const name = document.getElementById("name");

class ResultList extends Component {
  render() {
    return (
      <div>
        <table className="table table-bordered table-sortable">
          <thead>
            <tr>
              <th> Picture </th>
              <th id="name"><button type="button" onClick={() => {
                  console.log("Name Search Clicked")
                  this.props.handleSort(this.props.results);
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
                <tr key={item.phone}>
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

