import React, { useState, useEffect } from 'react'
import axios from "axios" // npm install axios inside the project
import { useParams } from 'react-router-dom'

// load pikachu when loading the component
//1.  api call in useEffect (axios)
//2. state to store the variable from api call


const DisplayOnLoad = (props) => {
    const { pokemonName} = useParams()
    const [pokemon, setPokemon] = useState()

    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            .then(response => setPokemon(response.data))
            .catch(err=> console.log(err))
    }, [pokemonName])

    return (
        <fieldset>
            <legend> DisplayOnLoad.jsx</legend>
            {
                pokemon?
                <div>
                    <h1>{pokemon.name} </h1>
                    <img src={pokemon.sprites.front_default} />
                </div>:
                <h1> Loading...</h1>

            }
        </fieldset>
    )
}

export default DisplayOnLoad