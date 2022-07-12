import React, { useState, useEffect } from 'react'
import axios from "axios" // npm install axios inside the project

// load pikachu when loading the component
//1.  api call in useEffect (axios)
//2. state to store the variable from api call


const DisplayOnLoad = (props) => {
    const {pokemonName} = props
    const [pokemon, setPokemon] = useState()

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            .then(
                res => {
                    console.log(res.data)
                    setPokemon(res.data)})
            .catch(err => console.log(err))
    }, [pokemonName])


    return (
        <fieldset>
        {
            pokemon?
            <div>
                <h1>{pokemon.name}</h1>
                <img src={pokemon.sprites.front_shiny} alt={pokemon.name}/>
            </div>:
            <h3>....Loading....</h3>
        }   
        </fieldset>
    )
}

export default DisplayOnLoad