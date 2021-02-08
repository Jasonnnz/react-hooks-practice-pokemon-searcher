import React,{ useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ pokemons, setPokemons}) {
  const [ name, setName ] = useState("")
  const [ hp, setHp ] = useState("")
  const [ frontUrl, setFrontUrl ] = useState("")
  const [ backUrl, setBackUrl ] = useState("")
  

  function handleSubmit(e){
    e.preventDefault()
    let newPokemon = {
      name: name,
      hp: parseInt(hp),
      sprites: {front: frontUrl, back: backUrl}
    }
    fetch('http://localhost:3001/pokemon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPokemon)
    })
    .then(r => r.json())
    .then(newP => {
      setPokemons([...pokemons, newP])
    })
    setName("")
    setHp("")
    setFrontUrl("")
    setBackUrl("")
  }
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={(e) => {
          handleSubmit(e)
        }}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={(e)=>setName(e.target.value)} value={name}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={(e)=>setHp(e.target.value)} value={hp} />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={(e)=>setFrontUrl(e.target.value)} value={frontUrl}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={(e)=>setBackUrl(e.target.value)} value={backUrl}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
