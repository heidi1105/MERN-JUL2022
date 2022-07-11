import React from 'react'

const MessageDisplay = (props) => {
  return (
    <fieldset>
        <legend> MessageDisplay.jsx</legend>
        <h1>Current Message</h1>
        <pre>{ props.message }</pre>

    </fieldset>
  )
}

export default MessageDisplay