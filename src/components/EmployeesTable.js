import React, { useEffect, useState } from 'react';

const EmployeesTable = (props) => {
  // # JESUS/FRANKIE: To avoid weird async issues w/parent state generating child state, I just took the props.employee and stored them as a regular old JS variable...

  // # I also moved the filterByFirstName method to the App component and removed it from this file. This file now uses the version of filterByFirstName passed in as a prop from App.js
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
        className=" table text-success"
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
            <th scope="col">Email Address</th>
            <th scope="col">Department</th>
            <th scope="col">Location</th>
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
