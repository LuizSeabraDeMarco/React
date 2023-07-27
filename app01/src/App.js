import React,{useState} from 'react'
import Led from './componentes/Led'



export default function App(){

  const [ligado,setLigado] =useState(false)

  const cancelar= (obj) =>{
    return obj.preventDefault()
  }

  return(
    <>
        <Led ligado={ligado} setLigado={setLigado}/>
        <a href="https://github.com/LuizSeabraDeMarco" target="_blank" onClick={(e) => cancelar(e)}><br></br>
          Meu GitHub
        </a>
    </>
  )
}