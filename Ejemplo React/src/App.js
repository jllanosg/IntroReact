import React, { useState } from 'react';
import './App.css';
import logo from "./images/pokemon_logo.png"

usuario_valido = "felipe"
contranse_valida = "123456"

if lo que ingreso == usuario
function App() {
  const [entrada, setEntrada] = useState("")
  const [id, setId] = useState(-1)
  const [pokemon, setPokemon] = useState({})
  const [imagen, setImagen] = useState("")
  const [error, setError] = useState("")

  async function fetcher(id) {
    const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .catch(e => setError(e));
    const datos = await respuesta.json()
    setPokemon(datos)
    setId(datos.id)
    setImagen(datos.sprites.front_default)
  }

  return (
    <div className="App">
      <div className="app-container">
        <img className="pokemon-image" src={logo} />
        <h1>Pokedex React JS</h1>
        <form onSubmit={(e) => {
          e.preventDefault()
          fetcher(entrada)
        }}> 
          <input type="text" value={entrada} onChange={event => {
          
          setEntrada(event.target.value)
          fn_auxiliar(entrada)
          }} />
          <button type="submit">Buscar</button>
        </form>
        <button disabled={id === 1 || id === -1 ? true : false} onClick={() => { fetcher(id - 1) }}>Atras</button>
        <button disabled={id === 893 || id === -1 ? true : false} onClick={() => { fetcher(id + 1) }}>Adelante</button>
        <h2>{pokemon.id} {pokemon.name}</h2>
        <img src={imagen} />
        <h5>{error}</h5>
      </div>
    </div>
  );
}

export default App;
