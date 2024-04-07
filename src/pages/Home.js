import '../index.css';
import kort from '../img/kort.png'; 

function Home() {
//#region kort
  let x = document.getElementById("dest");

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
    try {
      if(x.value === ""){
        a_ = true;
      }
    } catch (error) {}
    
    document.getElementById("blaff-btn").disabled = a_;
  }
//#endregion

  const checkForLog = () => {
    if (!document.cookie || isNaN(document.cookie)) {
      window.location.search = "?log-ind"
    }
  }


  return (
    <>
      <h1 style={{marginTop: '55px'}}>Vælg lokation</h1>
      <div id="kort" onClick={() => {getLocation()}}>
        <img src={kort} style={{width: "180px", marginLeft: "51px", marginTop: "22px"}} alt=''/>
      </div>
      <h1 style={{marginTop: '26px'}}>Eller</h1>
      <input id="dest" type='text' placeholder='Indtast lokation' style={{marginTop: '22px'}} onInput={() => {onLocation()}}></input>
      <button id="blaff-btn" onClick={() => {window.location.search = "?blaff"}} onLoad={checkForLog()}>Blaff</button>
    </>
  )
}

export default Home