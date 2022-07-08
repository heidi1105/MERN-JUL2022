import React, {useState} from 'react'
import Callback from './Callback'
import DisplayCallback from './DisplayCallback'

const Container = () => {
    const [message, setMessage] =useState("")

    const alertMessage =(msg) =>{
        setMessage(msg)
    }

    return (
        <div>
            <Callback parentFunction={alertMessage}/>
            <DisplayCallback messageFromParent={message} />
        </div>
    )
}

export default Container
