import React, { Component } from "react";
// import { useTable } from 'react-table'
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
                  this.props.handleSort();
                }}
              >First Name</button>
              </th>

              <th>
               <button type="button" onClick={() => {
                    console.log("Name Search Clicked")
                    this.props.handleSortLast();
                  }}
                >Last Name
                </button>
              </th>
              <th>
                  Email
              </th>
              <th>
                  Phone
              </th>
              <th>
              <button type="button" onClick={() => {
                    console.log("Name Search Clicked")
                    this.props.handleSortAge();
                  }}>
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

