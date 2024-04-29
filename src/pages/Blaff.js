import Chaufør from '../components/chaufør';
import '../index.css';
import React, {useState} from 'react'
import tøger from '../img/pfp/tøger.png';
import martin from '../img/pfp/martin.png';
import emil from '../img/pfp/Emil.png';
import valdemar from '../img/pfp/valdemar.png';

function Blaff() {
    
    const [name, setName] = useState("navn");
    const [age, setAge] = useState("0");
    const [distance, setDist] = useState("0");
    const [rating, setRating] = useState("0");
    const [link, setLink] = useState("");
    const [pfp, setPFP] = useState();

    const r_rating = () => {
        return (Math.floor(Math.random() * 2) + 2)+ "." + Math.floor(Math.random() * 9)
    }

    const r_age = () => {
        return Math.floor((Math.random() * 30) + 18);
    }

    const choose = (navn, afstand,img) => {
        
        document.getElementById("væk").remove();
        document.getElementById("profile").style.visibility = "";
        setName(navn);
        setDist(afstand);
        if (img !== undefined){
            setPFP(img);
        }
        setRating(r_rating);
        setAge(r_age);
    }

    const copy = (id) => {
        let input = document.getElementById(id);
        input.select();
        document.execCommand("copy");
    }

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        }
    }

    const showPosition = (position) => {
        try {
            setLink("https://www.google.com/maps/dir//" + position.coords.latitude + "," + position.coords.longitude);
            copy("link");
          alert("Lokationen er sendt og kopiret i udklipsholderen!");
        } catch (error) {
            console.log(error)
          alert("Fejl: kunne ikke finde lokation");
        }    
      }

    return (
        <>
            <div id="væk">
                <h1 style={{marginTop: "55px", fontWeight: "500", marginBottom: "22px"}}>Blaf</h1>
                <div id="q">
                    <div>
                        <Chaufør img={tøger} name="Tøger Lyngbo" afstand="2" color="#EB1615"onclick={() =>{choose("Tøger Lyngbo", 2, tøger)}}/>
                        <Chaufør img={martin} name="Martin Lykkebo" afstand="4" color="#1FEB15" onclick={() =>{choose("Martin Lykkebo", 4, martin)}}/>
                        <Chaufør img={emil} name="Emil Johannesen" afstand="5" color="#EB1615" onclick={() =>{choose("Emil Johannesen", 5, emil)}}/>
                        <Chaufør img={valdemar} name="Valdemar Neve" afstand="5" color="#1FEB15" onclick={() =>{choose("Valdemar Neve", 5, valdemar)}}/>
                        <Chaufør name="Emil" afstand="5" color="#1FEB15" onclick={() =>{choose("Emil", 5)}}/>
                        <Chaufør name="Patrick" afstand="6" color="#1FEB15" onclick={() =>{choose("Patrick", 6)}}/>
                        <Chaufør name="Morten" afstand="8" color="#EB1615" onclick={() =>{choose("Morten", 8)}}/>
                        <br/>
                    </div>
                </div>
                <button id='stop' onClick={() => {window.location.search = "";}}>Stop</button>
            </div>
            <div id="profile" style={{visibility: "hidden"}}>
                <div id="display">
                    <img id="img" src={pfp} alt=''></img>
                    <p id="afstand">{distance}min</p>
                    <h2 id="name">{name}</h2>
                    <p id="age">{age} år</p>
                    <br/>
                    <p id="rating">Bedømmelse: {rating}/5</p>
                    <p id="about">Om mig</p>
                    <p style={{marginLeft: "32px", width: "218px", color: "#707070"}}>Der er intet om denne chaufør</p>
                </div>
                <button id="tb" className='a' onClick={() => {window.location.search = "";}}>Tilbage</button>
                <button id="vælg" className='a' onClick={() => {getLocation()}}>Vælg</button>
            </div>
            <input id="link" value={link} style={{boxShadow: "none"}}></input>
        </>
    )

}

export default Blaff