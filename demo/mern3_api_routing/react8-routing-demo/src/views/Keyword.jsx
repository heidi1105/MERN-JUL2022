import React from 'react'
import { useParams } from 'react-router-dom'

const Keyword = () => {
    const {keyword, color} = useParams()

    return (
        <fieldset>
            <legend> Keyword.jsx</legend>
            <h1 style={{color:color}}>
                {keyword}
            </h1>
        </fieldset>
    )
}

export default Keyword