import React from 'react'

const Display = (props) => {
  return (
    <fieldset>
        <legend> Display.jsx</legend>
    <p> Username: {props.username} </p>
    <p> Age: {props.age} </p>
    <p> Password: {props.password} </p>

    </fieldset>
  )
}

export default Display