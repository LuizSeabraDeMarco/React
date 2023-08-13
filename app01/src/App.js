import React from 'react'

export default function App() {

  const carros=[
    {categoria: "Esporte", preco: "110000.00", modelo: "Golf GTI"},
    {categoria: "Esporte", preco: "10200.00", modelo: "BMW"},
    {categoria: "Sustentavel", preco: "11740.00", modelo: "Gol"},
    {categoria: "Poupular", preco: "174999.00", modelo: "Ford"},
    {categoria: "Poupular", preco: "111125.00", modelo: "Ferrari"}
    ];
  
  const listaCarros= carros.map(
    (c, i)=>
      <li key={i}>{i} - {c.categoria} - {c.modelo} - R${c.preco}</li>
  )
  
  return(
    <>
      <ul>{listaCarros}</ul>
    </>
  );

}