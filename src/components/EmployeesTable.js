import React, { useContext, useEffect, useState } from 'react';
// importing context
import EmployeeContext from '../context/EmployeeContext';

const EmployeesTable = () => {

  // consuming or using employees context 
  const { employees } = useContext(EmployeeContext); 
    
  const tableData = employees.map(obj => {
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