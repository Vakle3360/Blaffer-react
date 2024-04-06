import React, {useState, useEffect} from 'react'
import UserList from './UserList';
import './index.css';
import UserForm from './UserForm';

function App() {
  
  const [users, setUsers] = useState([{"id": 1,"fornavn": "ole", "efternavn": "henriksen", "alder": 18, "email": "ole@henriksen.dk", "adgangskode": "facts" }]);

  useEffect (() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    const repsonse = await fetch("https://blaffer-flask.onrender.com/api/get/users");
    const data = await repsonse.json();
    setUsers(data.users);    
  }

  return (
    <>
      <UserList users={users}/>
      <UserForm />
    </>
  )
}

export default App
