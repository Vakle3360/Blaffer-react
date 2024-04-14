import Chaufør from '../components/chaufør';
import ChauførProf from '../components/chaufør-profil';
import '../index.css';

function Blaff() {
    
    const items = [];
    const items__ = [];

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
        "Clare",
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

    const r_navn = () => {
        return navne[Math.floor(Math.random() * navne.length)] + " " + efternavne[Math.floor(Math.random() * efternavne.length)];
    }

    const r_afstand = () => {
        return Math.floor(Math.random() * 9)+ "." + Math.floor(Math.random() * 9)
    }

    const choose = (navn, afstand) => {
        document.getElementById("væk").remove();
        
        
    }

    return (
        <>
            <div id="væk" style={{visibility: "collapse"}}>
                <h1 style={{marginTop: "55px", fontWeight: "500", marginBottom: "22px"}}>Blaff</h1>
                <div id="q">
                    <div>
                        {items.map((item) => (
                            <Chaufør key={item.key} name={r_navn()} afstand={r_afstand()} onclick={() => {choose(r_navn(), r_afstand)}} />
                        ))}
                    </div>
                </div>
                <button id='stop' onClick={() => {window.location.search = "";}}>Stop</button>
            </div>
            <div id="profile">
                <div id="display">
                    <div></div>
                    <p>0 <p> km</p></p>
                    <h2>Navn</h2>
                    <p>alder <p> år</p></p>
                    <p>rating: <p>0 <p>/5</p></p></p>
                    <p>Om mig</p>
                    <p></p>
                </div>
            </div>
        </>
    )

}

export default Blaff