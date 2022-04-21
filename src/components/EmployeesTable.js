import React, { useState } from 'react';

const EmployeesTable = (props) => {

  const [table, setTable] = useState([]);

  // console.log(`Employees Table: ${props.test}`);
  props.employees.map(obj => {
    // This gets the first name and last name
    console.log(obj.name);
    // This gets the email
    console.log(obj.email);
    console.log(obj.location);
    console.log(obj.location.city);
    console.log(obj.location.state);
    console.log(obj.name.first);
    console.log(obj.name.last);
  })

  return (
    
    <div><table className="table">
    <thead>
      <tr>
        <th scope="col">First Name</th>
        <th scope="col">Last Name</th>
        <th scope="col">Email Address</th>
        <th scope="col">Department</th>
        <th scope="col">Location</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Larry</td>
        <td>the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </table></div>
  )
}

export default EmployeesTable;