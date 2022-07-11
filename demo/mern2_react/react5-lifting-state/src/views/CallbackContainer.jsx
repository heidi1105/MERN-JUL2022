import React, {useState} from 'react'
import { SiblingDisplay } from '../components/callback/SiblingDisplay'
import SiblingCounter from '../components/callback/SiblingCounter'

const CallbackContainer = () => {

    const [countAtParent, setCountAtParent] = useState(0)


    return (
        <fieldset style={{backgroundColor: "gainsboro"}}>
            <legend> CallbackContainer.jsx</legend>
            <SiblingCounter />
            <SiblingCounter />
            <SiblingCounter />
            <SiblingDisplay />
            <h1> Message in Parent : {countAtParent}</h1>
        </fieldset>
    )
}

export default CallbackContainer