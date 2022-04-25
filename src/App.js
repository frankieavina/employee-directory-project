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
// importing context 
import EmployeeContext from './context/EmployeeContext'; 




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
    {value: phone}
  ] = formFields;
 

  useEffect(() => {
    const storedEmployees = getEmployees().then((data) => {
      console.log('Employees Data:',data.results); 
      setEmployees(data.results);
    }); 
  },[])

  const handleFormSubmit = (e) =>{
    e.preventDefault();

    let [city, state] = location.split(','); 

    let newEmployeeData = {
      name: {first: fName, last: lName},
      email: email,
      location:{city, state},
      phone: phone,
    }

    alert(
      `Hey ${fName} ${lName}! This is your info: Your email is ${email}, you're located at ${location},
       and your number is ${phone}!`
    );
    // setEmployees(e)
    setEmployees(prevState => [...prevState,newEmployeeData]); 
    setFormFields(initialFields)
  }

  const handleInputChange = (e) => {
    const {name, value} = e.target; 
    const newFormFields = formFields.map((field) => {
      if(field.name === name ){
        return{...field, value}
      }
      return field; 
    })
    setFormFields(newFormFields)
  }

  const handleShowCard = () =>{
      setShowForm(!showForm);
  }

  return (
      <div className="newEmployeeBody">
      <EmployeeContext.Provider
        value={{
          employees: employees, 
        }}
      >
        <div className='headerNewEmployee'>
          <Header type="h8">Add a New Employee:</Header>
          {!showForm? <FaEye onClick={handleShowCard}/>: <FaEyeSlash onClick={handleShowCard}/> }        
        </div>

        {!showForm? '':
        <div className=' card text-black bg-success formBody'>
          <div className='card-body'>
            <Form onSubmit={handleFormSubmit} className='formBody'>
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
              <Button type="submit" disabled={formIsInvalid} className={!formIsInvalid ? 'btn btn-info mt-3 addPerBtn' : 'btn btn-secondary disabled mt-3 addPerBtn'}>
                Add New Employee
              </Button>
            </Form>            
          </div>
        </div>
        }
        <EmployeesTable />      
      </EmployeeContext.Provider>
      </div>
  );
}

export default App;
