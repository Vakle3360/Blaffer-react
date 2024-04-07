import React, {useState, useEffect} from 'react'
//import UserList from './UserList';
import './index.css';
//import UserForm from './UserForm';
import kort from './img/kort.png'; 

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
//#region kort
  const x = document.getElementById("dest");

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
     x.value = ("Geolocation is not supported by this browser.");
    }
  }

  const showPosition = (position) => {
    x.value = position.coords.latitude +
    ", " + position.coords.longitude;
    onLocation();
  }

  const onLocation = () => {
    let a_ = false;
    if(x.value === ""){
      a_ = true;
    }
    document.getElementById("blaff-btn").disabled = a_;
  }
//#endregion

  return (
    <>
      <h1 style={{marginTop: '55px'}}>Vælg destination</h1>
      <div id="kort" onClick={() => {getLocation()}}>
        <img src={kort} style={{width: "180px", marginLeft: "51px", marginTop: "22px"}} alt=''/>
      </div>
      <h1 style={{marginTop: '26px'}}>Eller</h1>
      <input id="dest" type='text' placeholder='Indtast destination' style={{marginTop: '22px'}} onInput={() => {onLocation()}}></input>
      <button id="blaff-btn" disabled>Blaff</button>
    </>
  )
}

export default App
