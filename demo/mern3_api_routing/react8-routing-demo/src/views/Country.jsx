import React from 'react'
import { useParams } from 'react-router-dom'

const Country = () => {
    const {country} = useParams()
    return (
        <fieldset>
            <legend> Country.jsx</legend>
            <h1>
                Let's go to {country}
            </h1>
        </fieldset>
    )
}

export default Country