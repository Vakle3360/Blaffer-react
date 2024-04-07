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

  const userExists = (email_) => {
    if (email_){
      for (let i = 0; i < users.length; i++){
          let user = users[i][0]
          try{
              if (user.email === email_){
                return true
              }
          }
          catch (e){}
      }
    }
  }

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
    }
  }

  const logind = (email, password) => {
    window.localStorage.setItem("id", checkForUser(email, password));
    if (!isNaN(window.localStorage.getItem("id"))){
      window.location.search = "";
    }
  }

  const opret = async (fornavn, efternavn, alder, email, adgangskode) => {
    if(!fornavn || !efternavn || !alder || !email || !adgangskode){
      return alert("Indtast alle oplysninger")
    }
    if (userExists (email)){
      return alert("Email er allerede tilknyttet en konto")
    } else{
      const data = {
        fornavn,
        efternavn,
        alder,
        email,
        adgangskode
      };
      const url = "https://blaffer-flask.onrender.com/api/user";
      const options = {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
      };
      const repsonse = await fetch(url, options);
  
      if (repsonse.status !== 201 && repsonse.status !== 200) {
          const data = await repsonse.json();
          alert(data.message);
      } else {
          //success
          logind(email, adgangskode);
          window.location.search = "";
      };
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
        <p id="vis" onClick={() => {var x = document.getElementById("pass"); var q = document.getElementById("vis"); if (x.type === "password"){x.type = "text"; q.innerHTML = "skjul";} else {x.type = "password";q.innerHTML = "vis";}}}>vis</p>
        <button onClick={() => {opret(document.getElementById("fnavn").value, document.getElementById("enavn").value, document.getElementById("alder").value, document.getElementById("email").value, document.getElementById("pass").value)}}>Opret</button>
      </div>
      <p style={{display: "inline", marginLeft: "95px", position: "relative", top: "28px", fontSize: "15px"}}>Har du en konto? 
        <p style={{display: "inline", fontWeight: "700", color: "#EB1615"}} onClick={() => {window.location.search = "?log-ind"}}> Log ind</p>
      </p>
    </>
  )
}

export default Opret