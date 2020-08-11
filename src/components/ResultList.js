import React, { Component } from "react";



const name = document.getElementById("name")

class ResultList extends Component {

  state = {
    filterUsers: [{}],
    order: "descending",
    users: [{}]
  };



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

 const orderLogic = if(this.state.order === "ascending"){
    if(name){
      console.log(this.props.results.map(function(item){
        item.name.first    
      }).sort(a, b){
      if(a.item.name.first<b.item.name.first){
        return -1;
      }if(a.item.name.first>b.item.name.first){
        return 1;
      }
      return 0;
      }
    }
  }
   

  render(){

    console.log(this.props)

  return (
    <div>
    <table className="table table-bordered table-sortable" >
      <thead>
      <tr>

      <th>Picture</th>
      <th id="name">Name</th>
      <th>Last Name</th>
      <th>Email</th>
      <th>Phone</th>
      <th>Age</th>

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
