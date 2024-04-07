import React, {useState, useEffect} from 'react'
//import UserList from './UserList';
import './index.css';
//import UserForm from './UserForm';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Log-ind';

function App() {
//#region DB  
  const [users, setUsers] = useState([{"id": 1,"fornavn": "ole", "efternavn": "henriksen", "alder": 18, "email": "ole@henriksen.dk", "adgangskode": "facts" }]);

  useEffect (() => {
    fetchUsers();
  }, [])

  const fetchUsers = async () => {
    const repsonse = await fetch("https://blaffer-flask.onrender.com/api/get/users");
    const data = await repsonse.json();
    setUsers(data.users);    
  }
//#endregion

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/log-ind' element={<Login/>}/>
        {/*
        <Route path='/opret-bruger' element={<Opret/>}/>
        */}
      </Routes>
    </>
  )
}

export default App