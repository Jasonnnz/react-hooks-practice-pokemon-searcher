import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [ pokemons, setPokemons ] = useState([])
  const [ search, setSearch ] = useState("")

  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
    .then(r => r.json())
    .then(pokemons => {
      setPokemons(pokemons)
    })
  },[])

  const displayPokemons =  pokemons.filter((p) => {return p.name.toLowerCase().includes(search.toLowerCase())}) 

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm pokemons={pokemons} setPokemons={setPokemons}/>
      <br />
      <Search search={search} setSearch={setSearch} />
      <br />
      <PokemonCollection pokemons={displayPokemons}/>
    </Container>
  );
}

export default PokemonPage;
