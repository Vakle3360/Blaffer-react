import Chaufør from '../components/chaufør';
import '../index.css';
import React, {useState} from 'react'

function Blaff() {
    
    const [name, setName] = useState("navn");
    const [age, setAge] = useState("0");
    const [distance, setDist] = useState("0");
    const [rating, setRating] = useState("0");
    const [link, setLink] = useState("");

    const items = [];

    let randomNumber = Math.floor(Math.random() * 9) + 1

    if (!items.length > 0){
        for (var i = 0;i < randomNumber; i++){
            items.push(<Chaufør key={i} name="navn" afstand="0"/>)
        }
    }

    let navne = [
        "Frida",
        "Olivia",
        "Alma",
        "Ella",
        "Agnes",
        "Clara",
        "Louise",
        "Asta",
        "Josefine",
        "Mathilde",
        "Valdemar",
        "Alexander",
        "Noah",
        "Tobias",
        "Nikolai",
        "Oliver",
        "Emil",
        "Gustav",
        "Martin",
        "Mikkel"
    ]

    let efternavne = [
        "Nielsen",
        "Jensen",
        "Hansen",
        "Pedersen",
        "Larsen",
        "Andersen",
        "Sørensen",
        "Rasmussen",
        "Berg",
        "Bang",
        "Buch",
        "Carlsen"
    ]

    let l_navne = [];

    const r_navn = (key) => {
        let navn = navne[Math.floor(Math.random() * navne.length)] + " " + efternavne[Math.floor(Math.random() * efternavne.length)];
        l_navne.push([{
            "id": key,
            "navn": navn
        }]);
        return navn;
    }

    const g_navn = (key) => {
        for(let az = 0; az < l_navne.length; az++){
            if (l_navne[az][0]["id"] === key){
                return (l_navne[az][0]["navn"]);
            };
        };
    };

    let l_afstande = [];

    const r_afstand = (key) => {
        let afstand = Math.floor(Math.random() * 9)+ "." + Math.floor(Math.random() * 9);
        l_afstande.push([{
            "id": key,
            "afstand": afstand
        }]);
        return afstand
    }

    const g_afstand = (key) => {
        for(let az = 0; az < l_afstande.length; az++){
            if (l_afstande[az][0]["id"] === key){
                return (l_afstande[az][0]["afstand"]);
            };
        };
    };

    const r_rating = () => {
        return Math.floor(Math.random() * 4)+ "." + Math.floor(Math.random() * 9)
    }

    const r_age = () => {
        return Math.floor((Math.random() * 30) + 18);
    }

    const choose = (navn, afstand) => {
        
        document.getElementById("væk").remove();
        document.getElementById("profile").style.visibility = "";
        setName(navn);
        setDist(afstand);
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
                <h1 style={{marginTop: "55px", fontWeight: "500", marginBottom: "22px"}}>Blaff</h1>
                <div id="q">
                    <div>
                        {items.map((item) => (
                            <Chaufør key={item.key} name={r_navn(item.key)} afstand={r_afstand(item.key)} onclick={() => {choose(g_navn(item.key), g_afstand(item.key))}} />
                        ))}
                    </div>
                </div>
                <button id='stop' onClick={() => {window.location.search = "";}}>Stop</button>
            </div>
            <div id="profile" style={{visibility: "hidden"}}>
                <div id="display">
                    <div id="img"></div>
                    <p id="afstand">{distance}km</p>
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
            <input id="link" value={link} style={{height: "0", border: "none"}}></input>
        </>
    )

}

export default Blaff