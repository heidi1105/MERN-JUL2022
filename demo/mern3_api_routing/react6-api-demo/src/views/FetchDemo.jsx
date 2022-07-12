import React, {useState} from 'react'
import FetchDisplay from '../components/fetchDemo/FetchDisplay'
import axios from "axios"


const FetchDemo = () => {
    const [pokemon, setPokemon] = useState()

    const fetchPokemonWithThen = () =>{
        fetch(`https://pokeapi.co/api/v2/pokemon/ditto`)
            .then(response => {
                console.log(response)
                return response.json()
            })
            .then(jsonResponse => {
                console.log(jsonResponse)
                setPokemon(jsonResponse)
            })
            .catch(err=> console.log("catch ... " + err))
    }

    const fetchPokemonWithAwait = async() =>{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/eevee`)
        const jsonResponse = await response.json()
        setPokemon(jsonResponse)
    }

    const fetchPokemonWithAwait2 = async() =>{
        try{
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/e`)
            const jsonResponse = await response.json()
            setPokemon(jsonResponse)
        }catch(err){
            setPokemon()
            alert("the pokemon is not available")
        }
    }

    const fetchPokmonWithAxios = () =>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/snorlax`)
            .then(response => setPokemon(response.data))
            .catch(err=> console.log(err))
    }
    const fetchPokmonWithAxiosAsync = async() =>{
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/ninetales`)
        setPokemon(response.data)
    }



    return (
        <fieldset>
            <legend> FetchDemo.jsx</legend>
            <button onClick={fetchPokemonWithThen}> Fetch with .then</button>
            <button onClick={fetchPokemonWithAwait}> Fetch with await</button>
            <button onClick={fetchPokemonWithAwait2}> Fetch error with await and try/catch</button>
            <button onClick={fetchPokmonWithAxios}> Axios.get</button>
            <button onClick={fetchPokmonWithAxiosAsync}> Axios.get with async</button>
            {
                pokemon?
                <FetchDisplay pokemon={pokemon}/>:
                <h5> Fetch a pokemon by clicking on one of the buttons</h5>
            }

        </fieldset>
    )
}

export default FetchDemo