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
      for (let i = 0; i < users.length; i++){
          let user = users[i][0]
          try{
              if (user.email === email_ && user.password === password_){
                console.log(user)
                return (user);
              }
          }
          catch (e){}
      }
      alert("Forkert email eller adgangskode")
    } else {alert("Indtast både email og adgangskode")}
  }

  const logind = (email, password) => {
    checkForUser(email, password)
  }

  return (
    <>
      <div id="login-box">
        <h1>Log Ind</h1>
        <input type='text' placeholder='Email' id="email"/>
        <input type='password' placeholder='Adgangskode' id="pass"/>
        <p id="vis">vis</p>
        <p style={{fontSize: "14px", marginLeft: "31px", marginTop: "28px"}}>Glemt adgangskode?</p>
        <button onClick={() => {logind(document.getElementById("email").value, document.getElementById("pass").value)}}>Log Ind</button>
      </div>
      <p style={{display: "inline", marginLeft: "70px", position: "relative", top: "28px", fontSize: "15px"}}>Har du ikke en konto? 
        <p style={{display: "inline", fontWeight: "700", color: "#EB1615"}} onClick={() => {window.location.href="/opret-bruger"}}> Opret dig</p>
      </p>
    </>
  )
}

export default Login