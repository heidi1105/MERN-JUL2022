import React, {useState} from 'react'
import { SiblingDisplay } from '../components/callback/SiblingDisplay'
import SiblingCounter from '../components/callback/SiblingCounter'

const CallbackContainer = () => {

    const [countAtParent, setCountAtParent] = useState(0)

    // TODO: create a function for the child
    const addCount = ()=>{
        setCountAtParent(countAtParent+1)
    }

    const reduceCount =() =>{
        setCountAtParent(countAtParent-1)
    }

    return (
        <fieldset style={{backgroundColor: "gainsboro"}}>
            <legend> CallbackContainer.jsx</legend>
            <SiblingCounter parentReceiveFunction = {addCount} />
            <SiblingCounter parentReceiveFunction = {reduceCount}/>
            <SiblingCounter parentReceiveFunction = {addCount}/>
            <SiblingDisplay count = {countAtParent}/>
            <h1> Count in Parent : {countAtParent}</h1>
        </fieldset>
    )
}

export default CallbackContainer

// pass info from parent component --> child component: props

// pass info from child --> parent