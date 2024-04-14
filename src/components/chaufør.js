import React from 'react';
import '../index.css';

function Chaufør (props){
    
    return (
            <div className='driver' onClick={() => {props.onclick()}}>
                <div className='pfp'></div>
                <h1 className='name'>{props.name}</h1>
                <h1 className='afstand'>{props.afstand} km</h1>
                <button>Vælg</button>
            </div>
    )

}

export default Chaufør