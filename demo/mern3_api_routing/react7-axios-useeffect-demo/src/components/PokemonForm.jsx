import React, { useState } from 'react'
import DisplayOnLoad from './DisplayOnLoad'
// input: onChange --> state
const PokemonForm = () => {
    const [pokemonName, setPokemonName] = useState("")
    const [refresh, setRefresh] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = e =>{
        e.preventDefault()
        setSubmitted(true)
        setRefresh(!refresh) // false--> true , true-->false

    }

    return (
        <fieldset>
            <legend> PokemonForm.jsx</legend>
            <form onSubmit={handleSubmit}>
                <p>
                    <input type="text" name="pokemonName" value={pokemonName}
                        onChange={e=>setPokemonName(e.target.value)}
                    />
                </p>
                <button type="submit" > Search for the pokemon!</button>
            </form>
            {
                submitted&&
                <DisplayOnLoad pokemonName={pokemonName} refresh={refresh} />
            }

        </fieldset>
    )
}

export default PokemonForm