import React from "react"
import Dados from './Dados'

export default function Corpo(){
    const gh=() => {
        return 'LuizSeabraDeMarco'
}
    const yt = 'Luiz Seabra animad0r'
    const insta = 'luizseabra.15'

    const somar=(v1,v2) => {
        return v1 + v2
    }

    return(
        <section>
            <h2>Curso de React</h2>
            <p>Eu sou bonito</p>
            <Dados 
            gitHub={gh} 
            youtube= {yt} 
            instagram={insta}
            somar={somar}
            />
        </section>
    )
}