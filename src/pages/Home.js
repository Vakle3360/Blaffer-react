import '../index.css';
import kort from '../img/kort.png'; 
import React, { useState } from 'react';

function Home() {
//#region kort
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      document.getElementById("dest").value = ("Geolocation is not supported by this browser.");
    }
  }

  const showPosition = (position) => {
    try {
      document.getElementById("dest").value = position.coords.latitude + ", " + position.coords.longitude;
      onLocation();
    } catch (error) {
      document.getElementById("dest").value = "ERROR";
      onLocation();
    }    
  }

  const onLocation = () => {
    let a_ = false;
    try {
      if(document.getElementById("dest").value === ""){
        a_ = true;
      }
    } catch (error) {}
    
    enableButton();
  }
//#endregion




  const [isButtonDisabled, setButtonDisabled] = useState(true);
 
    const disableButton = () => {
        setButtonDisabled(true);
    };
 
    const enableButton = () => {
        setButtonDisabled(false);
    };


    if (!window.localStorage.getItem("id") || isNaN(window.localStorage.getItem("id"))) {
      window.location.search = "?log-ind"
    }

  return (
    <>
      <h1 style={{marginTop: '55px'}}>Vælg lokation</h1>
      <div id="kort" onClick={() => {getLocation()}}>
        <img src={kort} style={{width: "180px", marginLeft: "51px", marginTop: "22px"}} alt=''/>
      </div>
      <h1 style={{marginTop: '26px'}}>Eller</h1>
      <input id="dest" type='text' placeholder='Indtast lokation' style={{marginTop: '22px'}} onInput={() => {onLocation()}}></input>
      <h1 style={{marginTop: '26px'}}>Vælg destination</h1>
      <input type='text' placeholder='Indtast desitnation' style={{marginTop: '22px'}}></input>
      <br/>
      <br/>
      <button id="blaff-btn" onClick={() => {window.location.search = "?blaff";}} disabled={isButtonDisabled}>Blaff</button>
    </>
  )
}

export default Home