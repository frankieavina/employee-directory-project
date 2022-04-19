import React, { useEffect, useState } from 'react';
import axios from "axios";
import './App.css';

function App() {

let [ employees, setEmployees ] = useState([]);
  useEffect(() => {
    async function getEmployees() {
      const results = await axios('https://randomuser.me/api/');
      setEmployees(results.data)
    }
    getEmployees();
  },[])

console.log(employees.results)

  return (
    <div className="App">
      Hello World 
    </div>
  );
}

export default App;
