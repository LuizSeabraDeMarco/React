import React from 'react'
import Eu from './Imgs/eu.jpg'

export default function Header(){
    const foto={
        with: '250px',
        height: '250px',
    }
    return(
        <header>
            <img style={foto}src={Eu}/>
            <h1>Oi</h1>
        </header>
    )
} 