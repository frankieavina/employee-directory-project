import React, { useEffect, useState } from 'react';
import './App.css';
import { getEmployees } from './utils/employees';
import EmployeesTable from './components/EmployeesTable';

function App() {

  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    const storedEmployees = getEmployees().then((data) => {
      console.log('Employees Data:',data.results); 
      setEmployees(data.results);
    }); 
  },[])

  return (
    <div className="App">
      Hello World 
      <EmployeesTable employees={ employees } />
    </div>
  );
}

export default App;
