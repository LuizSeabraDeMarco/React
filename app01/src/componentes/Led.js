import React, {useState} from 'react'
import LedVerde from './Imgs/verde.png'
import LedVermelho from './Imgs/vermelho.png'



export default function Led(props){

  return(
    <>
        <img style={{width: '75px'}}src={props.ligado?LedVerde :LedVermelho}/>
        <button onClick={() => props.setLigado(!props.ligado)}>{props.ligado?'Desligar' :'Ligar'}</button>
    </>
  )
}