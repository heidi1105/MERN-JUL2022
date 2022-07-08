import React from 'react'

const DisplayCallback = (props) => {
    return (
        <div>
            <h1> Message from parent: {props.messageFromParent} </h1>
        </div>
    )
}

export default DisplayCallback
