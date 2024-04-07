import '../index.css';
import React, {useState, useEffect} from 'react'

function Opret() {
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

  const checkForUser = (email_, password_) => {
    if (email_ && password_){
      for (let i = 0; i < users.length; i++){
          let user = users[i][0]
          try{
              if (user.email === email_ && user.password === password_){
                return (user.id);
              }
          }
          catch (e){}
      }
      alert("Forkert email eller adgangskode")
    } else {alert("Indtast både email og adgangskode")}
  }

  const logind = (email, password) => {
    document.cookie = checkForUser(email, password)
    if (!isNaN(document.cookie)){
      window.location.search = "";
    }
  }

  return (
    <>
      <div id="opret-box">
        <h1>Opret konto</h1>
        <input type='text' placeholder='Fornavn*' id="fnavn"/>
        <div id="same_box">
          <input type='text' placeholder='Efternavn*' id="enavn"/>
          <input type='number' placeholder='Alder*' id="alder"/>
        </div>
        <input type='text' placeholder='Email*' id="email"/>
        <input type='password' placeholder='Adgangskode' id="pass"/>
        <p id="vis">vis</p>
        <button onClick={() => {logind(document.getElementById("email").value, document.getElementById("pass").value)}}>Opret</button>
      </div>
      <p style={{display: "inline", marginLeft: "95px", position: "relative", top: "28px", fontSize: "15px"}}>Har du en konto? 
        <p style={{display: "inline", fontWeight: "700", color: "#EB1615"}} onClick={() => {window.location.search = "?log-ind"}}> Log ind</p>
      </p>
    </>
  )
}

export default Opret