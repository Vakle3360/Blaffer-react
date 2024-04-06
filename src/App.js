"use client";

import React, {useState, useEffect} from 'react'
//import UserList from './UserList';
import './index.css';
//import UserForm from './UserForm';

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


  const onLocation = () => {
    let a_ = false;
    if(document.getElementById("dest").value === ""){
      a_ = true;
    }
    document.getElementById("blaff-btn").disabled = a_;
  }

  return (
    <>
      <h1 style={{marginTop: '55px'}}>Vælg destination</h1>
      <div id="kort"></div>
      <h1 style={{marginTop: '26px'}}>Eller</h1>
      <input id="dest" type='text' placeholder='Indtast destination' style={{marginTop: '22px'}} onInput={() => {onLocation()}}></input>
      <button id="blaff-btn" disabled>Blaff</button>
    </>
  )
}

export default App
