import React from 'react'


const SiblingCounter = (props) => {

    const addCount = ()=>{
        props.parentReceiveFunction();
    }

    return (
        <fieldset style={{backgroundColor: "powderblue"}}>
            <legend> SiblingCounter.jsx</legend>
            <button onClick={addCount}> Add Count!</button>
        </fieldset>
    )
}

export default SiblingCounter