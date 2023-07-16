import React from 'react'

import Eu from './componentes/Imgs/eu.jpg'


export default function App(){
    let date = new Date
    const ano = date.getFullYear()
    let hora = date.getHours()
    const canal=()=>{
      return('Estamos em ')
    }

    function curso(){
      return `Agora são ${hora} horas`
    }
  return(
    <>
    <section>
      <header>
        <p>{canal()} {ano}</p>
        <br/>
        <p>{curso()}</p>
        </header>
        <div>
          <img src={Eu} alt=""></img>
          <img src="/Img/morte.png"></img>
        </div>
      </section>
    </>
  )
}