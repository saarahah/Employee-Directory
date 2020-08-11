import React from "react";

//table

function ResultList({results}) {
  {console.log(results)}
  return (
    <div>
    <table >
      <thead>
      <tr>
      <th>ID</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Email</th>

      </tr>
      </thead>
      <tbody> 
      {results.map(function(item, i){
      return <tr key={item.name.last}>
         <td><img src={item.picture.thumbnail} /></td>
         <td>{item.name.first}</td>
         <td>{item.name.last}</td>
         <td>{item.email}</td>
         <td>{item.phone}</td>
       </tr>      
      })}

      </tbody>
    </table>
    </div>
  );
}

export default ResultList;
