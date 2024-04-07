//import UserList from './UserList';
import './index.css';
import Blaff from './pages/Blaff';
//import UserForm from './UserForm';
import Home from './pages/Home';
import Login from './pages/Log-ind';
import Opret from './pages/Opret-bruger';

function App() {

  if(window.location.search === "?log-ind"){
    return (
      <>
        <Login/>
      </>
    )
  } else if (window.location.search === "?opret-bruger"){
    return(
      <>
        <Opret/>
      </>
    )
  } else if (window.location.search === "?blaff"){
    return(
      <>
        <Blaff/>
      </>
    )
  }
  else{
    return (
      <>
        <Home/>
      </>
    )
  }
}

export default App