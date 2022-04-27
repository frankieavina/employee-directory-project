import React, { useEffect, useState } from 'react';
import './App.css';
import { getEmployees } from './utils/employees';
import Header from './components/employee-create/CreateHeader';
import Button from './components/employee-create/CreateButton';
import Form from './components/employee-create/CreateForm';
import Input from './components/employee-create/CreateInput';
import EmployeesTable from './components/EmployeesTable';
import initialFields from './data';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [formFields, setFormFields] = useState(initialFields);
  const [employees, setEmployees] = useState([]);
  const formIsInvalid = formFields.some(
    ({ value, validate }) => !validate(value)
  );

  const [
    { value: fName },
    { value: lName },
    { value: email },
    { value: location },
    { value: phone },
  ] = formFields;

  useEffect(() => {
    const storedEmployees = getEmployees().then((data) => {
      console.log('Employees Data:', data.results);
      setEmployees(data.results);
    });
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    alert(
      `Hey ${fName} ${lName}! This is your info: Your email is ${email}, you're located at ${location},
       and your number is ${phone}!`
    );
    setEmployees([
      ...employees,
      {
        name: {
          first: fName,
          last: lName,
        },
        phone: phone,
        email: email,
        location: {
          city: location.split(', ')[0],
          state: location.split(', ')[1],
        },
      },
    ]);
    // setEmployees(e)
    setFormFields(initialFields);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const newFormFields = formFields.map((field) => {
      if (field.name === name) {
        return { ...field, value };
      }
      return field;
    });
    setFormFields(newFormFields);
  };

  const handleShowCard = () => {
    setShowForm(!showForm);
  };

  // # JESUS/FRANKIE: I moved this method over from EmployeesTable so that the method lives in the same file as its corresponding state array.
  const filterByFirstName = () => {
    // # To avoid mutating state directly (a React no-no) I created a brand new array to filter/sort and spread in the existing values...
    const updatedEmployees = [...employees];
    updatedEmployees.sort(function (a, b) {
      // # I had to alter the two lines below to point to the appropriate key/val pairs in the employee objects generated by the API.
      let nameA = a.name.first.toUpperCase(); // ignore upper and lowercase
      let nameB = b.name.first.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1; //nameA comes first
      }
      if (nameA > nameB) {
        return 1; // nameB comes first
      }
      return 0; // names must be equal
    });

    // # Once the sort/filter is completed, I'm updating state with the new array.
    setEmployees(updatedEmployees);
    //  console.log(tableData)
  };

  const filterByLastName = () => {
    
    const updatedEmployees = [...employees];
    updatedEmployees.sort(function (a, b) {
      // # I had to alter the two lines below to point to the appropriate key/val pairs in the employee objects generated by the API.
      let nameA = a.name.last.toUpperCase(); // ignore upper and lowercase
      let nameB = b.name.last.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1; //nameA comes first
      }
      if (nameA > nameB) {
        return 1; // nameB comes first
      }
      return 0; // names must be equal
    });

    // # Once the sort/filter is completed, I'm updating state with the new array.
    setEmployees(updatedEmployees);
   
  };

  return (
    <div className="newEmployeeBody">
      <div className="headerNewEmployee">
        <Header type="h8">Add a New Employee:</Header>
        {!showForm ? (
          <FaEye onClick={handleShowCard} />
        ) : (
          <FaEyeSlash onClick={handleShowCard} />
        )}
      </div>

      {!showForm ? (
        ''
      ) : (
        <div className=" card text-black bg-success formBody">
          <div className="card-body">
            <Form onSubmit={handleFormSubmit} className="formBody">
              {formFields.map(
                ({
                  label,
                  name,
                  type,
                  placeholder,
                  value,
                  errorMessage,
                  validate,
                }) => (
                  <Input
                    key={name}
                    label={label}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={handleInputChange}
                    errorMessage={errorMessage}
                    isValid={validate(value)}
                  />
                )
              )}
              <Button
                type="submit"
                disabled={formIsInvalid}
                className={
                  !formIsInvalid
                    ? 'btn btn-info mt-3 addPerBtn'
                    : 'btn btn-secondary disabled mt-3 addPerBtn'
                }
              >
                Add New Employee
              </Button>
            </Form>
          </div>
        </div>
      )}
      <EmployeesTable
        employees={employees}
        filterByFirstName={filterByFirstName}
        filterByLastName={filterByLastName}
        // # JESUS/FRANKIE: Then you can thread filterByFirstName through to EmployeesTable as a method so that EmployeesTable can use the method as needed.
      />
    </div>
  );
}

export default App;
