import React, { useState } from 'react'
import Display from './Display'

const Form3 = () => {
    const [username, setUsername] = useState("");
    const [age, setAge] = useState(18);
    const [isSubmitted, setIsSubmitted] = useState(false)

    // usernameError , ageError display error message of each field
    const [usernameError, setUsernameError] = useState(true)
    const [ageError, setAgeError] = useState(true)


    const handleSubmit =(e) =>{
        e.preventDefault();
        if(!usernameError && !ageError){
            console.log({username, age})
            setIsSubmitted(true);
        }else{
            alert("Fix the form")
        }

    }

    const handleUsername = (e) =>{
        const valToUpdate = e.target.value
        setUsername(e.target.value)
        if(valToUpdate.length < 3){
            setUsernameError("Username should be at least 3 characters")
        }else{
            setUsernameError("")
        }
    }

    const handleAge =(e) =>{
        const valToUpdate = e.target.value
        setAge(valToUpdate)
        if(valToUpdate < 21){
            setAgeError("Must be at least 21 years old")
        }else{
            setAgeError("")
        }

    }


    return (
        <fieldset>
            <legend> Form3.jsx</legend>
            <form onSubmit={handleSubmit}>
                <p>
                    <label> Username: </label>
                    <input type="text" name="username" onChange={handleUsername} value={username} />
                    <span style={{color: "red"}}>{usernameError}</span>

                
                </p>
                <p>
                    <label> Age: </label>
                    <input type="number" name="age" value={age} onChange={handleAge} />
                    <span style={{color: "red"}}> {ageError}</span>

                </p>
                <button type="submit" > Submit</button>

            </form>



            <Display username={username} age={age} />

        </fieldset>
    )
}

export default Form3