import React, { useState } from 'react'
// input: onChange --> state
const PokemonForm = (props) => {
    const [pokemonName, setPokemonName] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        props.onNewName(pokemonName)
    }

    return (
        <fieldset>
           <form onSubmit={handleSubmit}>
                <p>
                    <input type="text" name="pokemonName" value={pokemonName}
                        onChange={e=>setPokemonName(e.target.value)}></input>
                </p>
                <button type="submit"> Search for a Shiny Pokemon</button>
           </form>
        </fieldset>
    )
}

export default PokemonForm