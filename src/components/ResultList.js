import React, { Component } from "react";



const name = document.getElementById("name")

class ResultList extends Component {
  state = {
    filterUsers: [{}],
    order: "descending",
    users: [{}]
  }

 sort = function sortOrder(){
  if (this.state.order === "descending"){
    this.setState({
      order: "ascending" 
    })

  }else {
    this.setState({
      order: "descending"
    })
  }
  }


  orderLogic(arr) {
    function compare(a, b) {
    var nameA = a.name.first.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.first.toUpperCase(); // ignore upper and lowercase
    if (a.name.first > b.name.first) {
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

  render(){
  
  return (

    <div>
    <table className="table table-bordered table-sortable" >
      <thead>
      <tr>

      <th>Picture</th>
      <th>
            <button
              type="button"
              // onClick={() => requestSort(item.name.first)}
              // className={getClassNamesFor(item.name.first)}
            >
              First Name
            </button>
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
      {this.props.results.map(function(item, i){
      return <tr key={item.name.last}>
         <td><img src={item.picture.thumbnail} /></td>
         <td>{item.name.first}</td>
         <td>{item.name.last}</td>
         <td>{item.email}</td>
         <td>{item.phone}</td>
         <td>{item.registered.age}</td>
       </tr>      
      })}

      </tbody>
    </table>
    </div>
  );
}
}



export default ResultList;

// export default function App() {
//   return (
//     <div className="App">
//       <ProductTable
//         products={[
//           { id: 1, name: 'Cheese', price: 4.9, stock: 20 },
//           { id: 2, name: 'Milk', price: 1.9, stock: 32 },
//           { id: 3, name: 'Yoghurt', price: 2.4, stock: 12 },
//           { id: 4, name: 'Heavy Cream', price: 3.9, stock: 9 },
//           { id: 5, name: 'Butter', price: 0.9, stock: 99 },
//           { id: 6, name: 'Sour Cream ', price: 2.9, stock: 86 },
//           { id: 7, name: 'Fancy French Cheese 🇫🇷', price: 99, stock: 12 },
//         ]}
//       />
//     </div>
//   );
// }
