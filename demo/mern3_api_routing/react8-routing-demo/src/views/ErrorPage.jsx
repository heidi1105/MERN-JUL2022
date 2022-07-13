import React from 'react'
import { useNavigate } from 'react-router-dom'

// if it redirects to error page, show a button to go back/ go home

const ErrorPage = () => {
    const navigate = useNavigate()

    const redirectToHome = ()=>{
        navigate("/home")
    }

    const redirectBack = () =>{
        navigate(-1)
    }


    return (
        <fieldset>
            <legend> ErrorPage.jsx</legend>
            <button onClick={redirectToHome}>Go home</button>
            <button onClick={redirectBack}> Go back</button>


        </fieldset>
    )
}

export default ErrorPage