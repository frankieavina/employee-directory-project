import React, { useEffect, useState } from 'react';
import './App.css';
import { getEmployees } from './utils/employees';
import Header from './components/employee-create/CreateHeader';
import Button from './components/employee-create/CreateButton';
import Form from './components/employee-create/CreateForm';
import Input from './components/employee-create/CreateInput';
import Title from './components/Title';
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

  //>--- Filter Methods for EmployeesTable 

  const filterByName = (v, bool) => {
    
    const updatedEmployees = [...employees];
    updatedEmployees.sort(function (a, b) {
     
      if (!bool) {

      let nameA = a.name[v].toUpperCase(); // ignore upper and lowercase
      let nameB = b.name[v].toUpperCase(); // ignore upper and lowercase

      if (nameA < nameB) {
        return -1; //nameA comes first
      }
      if (nameA > nameB) {
        return 1; // nameB comes first
      }
      return 0; // names must be equal
    }

    else if (bool) {

      let nameA = a.name[v].toUpperCase(); // ignore upper and lowercase
      let nameB = b.name[v].toUpperCase(); // ignore upper and lowercase

      if (nameA > nameB) {
        return -1; //nameA comes first
      }
      if (nameA < nameB) {
        return 1; // nameB comes first
      }
      return 0; // names must be equal
    }

  });

    // # Once the sort/filter is completed, I'm updating state with the new array.
    setEmployees(updatedEmployees);
   
  };

  const filterByEmailOrPhone = (v, bool) => {
    
    const updatedEmployees = [...employees];
    updatedEmployees.sort(function (a, b) {
     
      if (!bool) {

      let nameA = a[v].toUpperCase(); // ignore upper and lowercase
      let nameB = b[v].toUpperCase(); // ignore upper and lowercase

      if (nameA < nameB) {
        return -1; //nameA comes first
      }
      if (nameA > nameB) {
        return 1; // nameB comes first
      }
      return 0; // names must be equal
    }

    else if (bool) {

      let nameA = a[v].toUpperCase(); // ignore upper and lowercase
      let nameB = b[v].toUpperCase(); // ignore upper and lowercase

      if (nameA > nameB) {
        return -1; //nameA comes first
      }
      if (nameA < nameB) {
        return 1; // nameB comes first
      }
      return 0; // names must be equal
    }

  });

    // # Once the sort/filter is completed, I'm updating state with the new array.
    setEmployees(updatedEmployees);
   
  };

  const filterByLocation = (v, bool) => {
    
    const updatedEmployees = [...employees];
    updatedEmployees.sort(function (a, b) {
     
      if (!bool) {

      let nameA = a.location[v].toUpperCase(); // ignore upper and lowercase
      let nameB = b.location[v].toUpperCase(); // ignore upper and lowercase

      if (nameA < nameB) {
        return -1; //nameA comes first
      }
      if (nameA > nameB) {
        return 1; // nameB comes first
      }
      return 0; // names must be equal
    }

    else if (bool) {

      let nameA = a.location[v].toUpperCase(); // ignore upper and lowercase
      let nameB = b.location[v].toUpperCase(); // ignore upper and lowercase

      if (nameA > nameB) {
        return -1; //nameA comes first
      }
      if (nameA < nameB) {
        return 1; // nameB comes first
      }
      return 0; // names must be equal
    }

  });

    // # Once the sort/filter is completed, I'm updating state with the new array.
    setEmployees(updatedEmployees);
   
  };

  return (
    <div className="newEmployeeBody">
       <Title />
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
        filterByName={filterByName}
        filterByEmailOrPhone={filterByEmailOrPhone}
        filterByLocation={filterByLocation}
      />
    </div>
  );
}

export default App;
