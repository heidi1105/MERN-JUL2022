import React, { useState } from 'react'
import Display from './Display'

const Form1 = () => {
    const [username, setUsername] = useState("")
    const [age, setAge] = useState(18)
    const [password, setPassword] = useState("")

    const handlePassword = (e) =>{
        setPassword(e.target.value)
    }

    return (
        <fieldset>
            <legend> Form1.jsx</legend>
            <h1> Form</h1>
            <p>
                <label> Username: </label>
                <input type="text" name="username" onChange={(e)=>setUsername(e.target.value)} value={username}/>
                {
                    username.length < 5?
                    <span style={{color:"red"}}>The username needs to be at least 5 characters</span>:""
                }
            </p>
            <p>
                <label> Age: </label>
                <input type="number" name="age" value={age} onChange={e=>setAge(e.target.value)} />
            </p>
            <p>
                <label> Password:</label>
                <input type="password" name="password" value={password} onChange={handlePassword} />
            </p>
            
            <Display username={username} age={age} password={password} />


        </fieldset>
    )
}

export default Form1