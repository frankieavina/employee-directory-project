import './App.css';
import { useState, useEffect } from 'react';
import { getEmployees } from './utils/employees';
import Header from './components/employee-create/CreateHeader';
import Button from './components/employee-create/CreateButton';
import Form from './components/employee-create/CreateForm'; 
import Input from './components/employee-create/CreateInput';
import initialFields from './data';



function App() {

  
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
    { value: department},
  ] = formFields;
 

  useEffect(() => {
    const storedEmployees = getEmployees().then((data) => {
      console.log('Employees Data:',data.results); 
      setEmployees(data.results);
    }); 
  },[])

  const handleFormSubmit = (e) =>{
    e.preventDefault();

    alert(
      `Hey ${fName} ${lName}! This is your info: Your email is ${email}, and your located at ${location},
      your department is ${department}!`
    );
    // setEmployees(e)
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

  return (
    <div className="App">
      {/* Employee Create Card */}
      <section className="wrapper">
        <Header type="h1">Add a New Employee:</Header>
        <Form onSubmit={handleFormSubmit}>
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
          <Button type="submit" disabled={formIsInvalid}>
            Add New Employee
          </Button>
        </Form>
      </section>
    </div>
  );
}

export default App;
