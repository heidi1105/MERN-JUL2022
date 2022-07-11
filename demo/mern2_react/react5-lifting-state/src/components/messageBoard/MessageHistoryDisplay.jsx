import React from 'react'

const MessageHistoryDisplay = (props) => {
  return (
    <fieldset>
        <legend> MessageHistoryDisplay.jsx</legend>
        <h1> Messages</h1>
        {
            props.messageArray.map((message, i)=>{
                return(
                    <pre key={i}> {message}</pre>
                )
            })
        }

        <pre></pre>

    </fieldset>
  )
}

export default MessageHistoryDisplay