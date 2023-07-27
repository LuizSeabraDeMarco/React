import React from "react"

export default function Dados(props){
    const n1 = 10
    const n2 = 5
    return(
        <selection>
            <p>GitHub: {props.gitHub()}</p>
            <p>Instagram: {props.instagram}</p>
            <p>Youtube: {props.youtube}</p>
            <p>{'A soma de ' + n1 + ' com ' + n2 + ' é igual a ' + props.somar(n1,n2)}</p>
        </selection>
    )
}