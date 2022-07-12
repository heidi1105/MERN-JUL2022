import React from 'react'

const FetchDisplay = (props) => {
    const {pokemon} = props
    return (
        <fieldset>
            <legend> FetchDisplay.jsx</legend>
            <div>
                <h1> {pokemon.name} </h1>
                <img src={pokemon.sprites.front_default} />
            </div>
        </fieldset>
    )
}

export default FetchDisplay