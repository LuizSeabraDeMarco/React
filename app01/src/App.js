import React,{useState} from 'react'

export default function App() {

  const [log,setLog]=useState(false)

  const [cor,setCor]=useState(1)

  const vermelho={color:'red'}
  const azul={color:'blue'}
  const verde={color:'green'}

  const retornaCor=(c)=>{
    if(c == 1){
      return vermelho
    } else if(c == 2){
      return verde
    }else{
      return azul
    }
  }

  const mudaCor =()=>{
    setCor(cor + 1)
    if (cor > 2){
      setCor(1)
    }
  }

  const msglogin=()=>{
    return 'Usuario Logado'
  }
  const msglogoff=()=>{
    return 'Usuario Deslogado'
  }
  
  const cumprimento=()=>{
    const hora=new Date().getHours()

    if (hora >=0 && hora < 13){
      return(
        <p>Bom dia</p>
      )
    }else if (hora >=13 && hora < 18){
      return(
        <p>Boa tarde</p>
      )
    }else{
      return(
        <p>Boa noite</p>
      )
    }
  }
  setInterval(mudaCor,1000)

  return(
    <>
      {cumprimento()}
      <p>{log?msglogin():msglogoff()}</p>
      <button onClick={()=>setLog(!log)}>{log?'Login':'Logoff'}</button>
      <h1 style={retornaCor(cor)}>Mudando de cor</h1>
      <button onClick={()=> mudaCor()}>Mudar de Cor</button>
    </>
  );

}
