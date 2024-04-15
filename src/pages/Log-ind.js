import '../index.css';
import React, {useState, useEffect} from 'react'

function Login() {
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
      let a = false;
      for (let i = 0; i < users.length; i++){
          let user = users[i][0]
          try{
              if (user.email === email_ && user.password === password_){
                a = true;
                return (user.id);
              }
          }
          catch (e){}
      }
      if (!a) {alert("Forkert email eller adgangskode")}
    } else {alert("Indtast både email og adgangskode")}
  }

  const logind = (email, password) => {
    window.localStorage.setItem("id", checkForUser(email, password));
    if (!isNaN(window.localStorage.getItem("id"))){
      window.location.search = "";
    }
  }

  return (
    <>
      <div id="login-box">
        <h1>Log Ind</h1>
        <input type='text' placeholder='Email' id="email"/>
        <input type='password' placeholder='Adgangskode' id="pass"/>
        <p id="vis" onClick={() => {var x = document.getElementById("pass"); var q = document.getElementById("vis"); if (x.type === "password"){x.type = "text"; q.innerHTML = "skjul";} else {x.type = "password";q.innerHTML = "vis";}}}>vis</p>
        <p style={{fontSize: "14px", marginLeft: "31px", marginTop: "28px"}}>Glemt adgangskode?</p>
        <button onClick={() => {logind(document.getElementById("email").value, document.getElementById("pass").value)}}>Log Ind</button>
      </div>
      <br/>
      <p style={{position: "absolute", top: "493px", left: "75px", fontSize: "15px", color: "#140707" }}>Har du ikke en konto?</p>
      <p style={{fontWeight: "700", color: "#EB1615", position: "absolute", top: "493px", right: "75px"}} onClick={() => {window.location.search = "?opret-bruger"}}> Opret dig</p>
    </>
  )
}

export default Login