import React, { useState, useEffect } from 'react'
import axios from "axios"

// 1. grab info from different URL : AXIOS
// 2. Display info on load : useEffect
// 3. useState for the info 

const TestPage = () => {
    const [info, setInfo] = useState()

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/test`)
            .then(res=>{
                console.log(res.data)
                setInfo(res.data)
            })
            .catch(err=>console.log(err))
    },[])

    return (
        <fieldset>
            <legend> TestPage.jsx</legend>
            {
                info?
                <h1>{info.status}</h1>:
                <h1> Loading...</h1>
            }

        </fieldset>
    )
}

export default TestPage