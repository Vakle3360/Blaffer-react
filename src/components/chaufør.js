import React from 'react';
import '../index.css';

function Chaufør (props){

    if (props.img === undefined){
        return (
                <div className='driver' onClick={() => {props.onclick()}}>
                    <div className='pfp'></div>
                    <h1 className='name'>{props.name}</h1>
                    <h1 className='afstand'>{props.afstand} min</h1>
                    <button style={{backgroundColor: props.color}}>Vælg</button>
                </div>
        )
    }
    else{
        return (
                <div className='driver' onClick={() => {props.onclick()}}>
                    <img src={props.img} className='pfp' alt=''/>
                    <h1 className='name'>{props.name}</h1>
                    <h1 className='afstand'>{props.afstand} min</h1>
                    <button style={{backgroundColor: props.color}}>Vælg</button>
                </div>
        )
    }
    

}

export default Chaufør