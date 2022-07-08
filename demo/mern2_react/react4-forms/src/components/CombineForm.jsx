import React, { useState } from 'react'

const CombineForm = () => {
    const [formState, setFormState] = useState({
        username : "",
        age: 18
    })

    const [formError, setFormError] = useState({
        username: true,
        age: true
    })
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleInput =(e) =>{
        const keyToUpdate = e.target.name
        const valToUpdate = e.target.value

        setFormState({
            ...formState,
            [keyToUpdate] : valToUpdate
        })

        const errors = {...formError}

        // if(keyToUpdate === "username"){
        //     if(valToUpdate.length < 3){
        //             errors.username = "Username must be at least 3 characters"
        //     }else{
        //             errors.username =""
        //     }
        // }else if(keyToUpdate === "age"){
        //     if(valToUpdate < 21){
        //         errors.age= "Must be at least 21 years old"
        //     }else{
        //         errors.age =""
        //     }
        // }

        switch(keyToUpdate){
            case 'username':
                valToUpdate.length < 3?
                    errors.username = "Username must be at least 3 characters":
                    errors.username ="" 
                break;
            case 'age':
                valToUpdate <21?
                    errors.age= "Must be at least 21 years old":
                    errors.age =""
                break;
        }

        setFormError(errors)



    }

    const handleSubmit= (e) =>{
        e.preventDefault()
        if(!formError.username && !formError.age){
            console.log(formState)
            setIsSubmitted(true)
        }else{
            alert("Fix the form")
        }

    }

    return (
        <fieldset>
            <legend> CombineForm.jsx</legend>
            <form onSubmit={handleSubmit}>
                <p>
                    <label> Username: </label>
                    <input type="text" name="username" onChange={handleInput} value={formState.username} />
                    <span style={{color: "red"}}> {formError.username}</span>

                
                </p>
                <p>
                    <label> Age: </label>
                    <input type="number" name="age"  onChange={handleInput} value={formState.age}/>
                    <span style={{color: "red"}}>{formError.age}</span>

                </p>
                <button type="submit" disabled={formError.username || formError.age}> Submit</button>

            </form>
        </fieldset>
    )
}

export default CombineForm