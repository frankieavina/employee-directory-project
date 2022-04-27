import React, { useEffect, useState } from 'react';

const EmployeesTable = (props) => {
 
  const table = props.employees.map((obj) => {
    return {
      firstName: obj.name.first,
      lastName: obj.name.last,
      email: obj.email,
      location: `${obj.location.city}, ${obj.location.state}`,
      phone: obj.phone,
    };
  });

  return (
    <div>
      <table
        style={{ width: '920px', margin: 'auto' }}
        className=" table text-success mt-5"
      >
        <thead>
          <tr>
            <th
              scope="col"
              onClick={() => {
                props.filterByFirstName();
              }}
            >
              First Name
            </th>
            <th scope="col"
             onClick={() => {
              props.filterByLastName();
            }}>
              Last Name
            </th>
            <th scope="col"
             onClick={() => {
              props.filterByEmail();
            }}>
              Email Address
              </th>
            <th scope="col"
             onClick={() => {
              props.filterByDepartment();
            }}>
              Department
              </th>
            <th scope="col"
            onClick={() => {
              props.filterByPhone();
            }} 
            >Phone</th>
          </tr>
        </thead>
        <tbody>
          {table.map((obj) => {
            return (
              <tr>
                <td>{obj.firstName}</td>
                <td>{obj.lastName}</td>
                <td>{obj.email}</td>
                <td>{obj.location}</td>
                <td>{obj.phone}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeesTable;
