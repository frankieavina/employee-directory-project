import React, { useEffect, useState } from 'react';

const EmployeesTable = (props) => {

  // const [table, setTable] = useState();
  
  // useEffect(() => {
  //   setTable(initTable());
  // },[]);

  // console.log(`Employees Table: ${props.test}`);
//   const initTable = () => { 
    
//     const tableData = props.employees.map(obj => {
//     // This gets the first name and last name
//     // console.log(obj.name);
//     // // This gets the email
//     // console.log(obj.email);
//     // console.log(obj.location);
//     // console.log(obj.location.city);
//     // console.log(obj.location.state);
//     // console.log(obj.name.first);
//     // console.log(obj.name.last);
//     // tableData.push(obj.email);
//    return obj.email;
//     });
//     return tableData;
// }


    
  const tableData = props.employees.map(obj => {
      return {
        "firstName": obj.name.first ,
        "lastName": obj.name.last,
        "email": obj.email,
        "location": `${obj.location.city}, ${obj.location.state}`,
        "phone": obj.phone
      }
  });



// Filter First Name
const filterByFirstName = () => {
  alert('Clicked');
}
// Filter Last Name
// Filter First Name
// Filter First Name

console.log('Test:', tableData);
let names = tableData.map( obj => {
  return obj.firstName;
} )

names = names.sort()
console.log(names);
  return (
    
    <div>
    <table  style={{width: "920px", margin: "auto"}} className=" table text-success">
    <thead>
      <tr>
        <th scope="col" onClick={ filterByFirstName }>
          First Name 
          </th>
        <th scope="col">Last Name</th>
        <th scope="col">Email Address</th>
        <th scope="col">Department</th>
        <th scope="col">Location</th>
      </tr>
    </thead>
    <tbody>
    
     { 
      tableData.map( obj => {
       
        return <tr>
                  <td>{obj.firstName}</td>
                  <td>{obj.lastName}</td>
                  <td>{obj.email}</td>
                  <td>{obj.location}</td>
                  <td>{obj.phone}</td>
                </tr>
  
    })  }
  
    
    
    </tbody>
  </table>
  </div>
  )
}

export default EmployeesTable;