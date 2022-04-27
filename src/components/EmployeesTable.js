import React, { useEffect, useState } from 'react';

const EmployeesTable = (props) => {

  const [isClickedFirstName, setIsClickedFirstName] = useState(false);
  const [isClickedLastName, setIsClickedLastName] = useState(false);
  const [isClickedEmail, setIsClickedEmail] = useState(false);
 
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
                if (isClickedFirstName){
                  console.log('Clicked');
                  props.filterName('first', isClickedFirstName)
                  setIsClickedFirstName(false);
                }  
                else {
                  console.log('Not Clicked Yet');
                 
                  console.log(isClickedFirstName, 'isClicked')
                  props.filterName('first', isClickedFirstName)
                  setIsClickedFirstName(true);
                }  
              }}
            >
              First Name
            </th>
            <th scope="col"
             onClick={() => {
              if (isClickedLastName){
                console.log('Clicked');
                props.filterName('last', isClickedLastName)
                setIsClickedLastName(false);
              }  
              else {
                console.log('Not Clicked Yet');
               
                console.log(isClickedLastName, 'isClicked')
                props.filterName('last', isClickedLastName)
                setIsClickedLastName(true);
              }  
            }}>
              Last Name
            </th>
            <th scope="col"
             onClick={() => {
              if (isClickedEmail){
                console.log('Clicked');
                props.filterByEmail('email', isClickedEmail)
                setIsClickedEmail(false);
              }  
              else {
                console.log('Not Clicked Yet');
               
                console.log(isClickedEmail, 'isClicked')
                props.filterByEmail('email', isClickedEmail)
                setIsClickedEmail(true);
              }  
            }}>
              Email Address
              </th>
            <th scope="col"
             onClick={() => {
              props.filterByLocation();
            }}>
              Location
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
