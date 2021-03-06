import React from "react";
import SearchResultContainer from "./components/SearchResultContainer";


function App() {
  return <SearchResultContainer />;
}

export default App;

// import React from 'react';
// import './style.css';

// const useSortableData = (items, config = null) => {
//   const [sortConfig, setSortConfig] = React.useState(config);

//   const sortedItems = React.useMemo(() => {
//     let sortableItems = [...items];
//     if (sortConfig !== null) {
//       sortableItems.sort((a, b) => {
//         if (a[sortConfig.key] < b[sortConfig.key]) {
//           return sortConfig.direction === 'ascending' ? -1 : 1;
//         }
//         if (a[sortConfig.key] > b[sortConfig.key]) {
//           return sortConfig.direction === 'ascending' ? 1 : -1;
//         }
//         return 0;
//       });
//     }
//     return sortableItems;
//   }, [items, sortConfig]);

//   const requestSort = (key) => {
//     let direction = 'ascending';
//     if (
//       sortConfig &&
//       sortConfig.key === key &&
//       sortConfig.direction === 'ascending'
//     ) {
//       direction = 'descending';
//     }
//     setSortConfig({ key, direction });
//   };

//   return { items: sortedItems, requestSort, sortConfig };
// };

// const UserTable = (props) => {
//   const { items, requestSort, sortConfig } = useSortableData(props.users);
//   const getClassNamesFor = (name) => {
//     if (!sortConfig) {
//       return;
//     }
//     return sortConfig.key === name ? sortConfig.direction : undefined;
//   };
//   return (
//     <table>
//       <caption>Employees</caption>
//       <thead>
//         <tr>
//         <th>Picture</th>
        
//       <th>
//             <button
//               type="button"
//               onClick={() => requestSort('name')}
//               className={getClassNamesFor('name')}
//             >
//               First Name
//             </button>
//           </th>
//           <th>
//             <button
//               type="button"
//               onClick={() => requestSort('price')}
//               className={getClassNamesFor('price')}
//             >
//               Last Name
//             </button>
//           </th>
//           <th>
//             <button
//               type="button"
//               onClick={() => requestSort('stock')}
//               className={getClassNamesFor('stock')}
//             >
//               Email
//             </button>
//           </th>
//           <th>
//             <button
//               type="button"
//               onClick={() => requestSort('stock')}
//               className={getClassNamesFor('stock')}
//             >
//               Phone
//             </button>
//           </th>
//           <th>
//             <button
//               type="button"
//               onClick={() => requestSort('stock')}
//               className={getClassNamesFor('stock')}
//             >
//               Age
//             </button>
//           </th>
//         </tr>
//       </thead>
//       <tbody>
//       {this.props.results.map(function(item, i){
//         console.log(this.props.results)
//       return <tr key={item.name.last}>
//          <td><img src={item.picture.thumbnail} /></td>
//          <td>{item.name.first}</td>
//          <td>{item.name.last}</td>
//          <td>{item.email}</td>
//          <td>{item.phone}</td>
//          <td>{item.registered.age}</td>
//        </tr>      
//       })}
      
//       </tbody>
//     </table>
//   );
// };

// export default function App() {
//   return (
//     <div className="App">
//       <UserTable
//         users={[]}
//       />
//     </div>
//   );
// }