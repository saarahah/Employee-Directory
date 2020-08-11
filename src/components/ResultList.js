import React from "react";

//table

function ResultList({results}) {
  // {console.log(results)}
  // const { results } = props;
  const [sortedField, setSortedField] = React.useState(null);
  return (
    <div>
    <table className="table table-bordered table-sortable" >
      <thead>
      <tr>
      <th>Picture</th>
      <th> <button type="button" onClick={() => setSortedField('name')}>
          Name
          </button></th>
      <th>Last Name</th>
      <th>Email</th>
      <th>Phone</th>
      <th>Age</th>

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
         <td>{item.registered.age}</td>
       </tr>      
      })}

      </tbody>
    </table>
    </div>
  );
}

export default ResultList;
