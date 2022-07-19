import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom"

// 1. input: useState
// 2. axios
// optional: redirect: useNavigate

const CreateFormRedirect = () => {
    const [title, setTitle] = useState("")
    const [artist, setArtist] = useState("")
    const [rating, setRating] = useState(5)
    const [errors, setErrors] = useState([])

    const navigate = useNavigate()

    const handleSubmit =(e) =>{
        e.preventDefault()
        // post the new song to the backend
        axios.post(`http://localhost:8000/api/songs`, {title, artist, rating})
            .then(res=>navigate("/dashboard")) // SUCCESSFUL
            .catch(err=>{
                const errMsgArr =[]
                const errResponse = err.response.data.errors
                for(const eachKey in errResponse){
                    errMsgArr.push(errResponse[eachKey].message)
                }
                setErrors(errMsgArr)
            }) // UNSUCCESSFULL
    }

    return (
        <fieldset>
            <legend> CreateFormRedirect.jsx</legend>
            <form onSubmit={handleSubmit}>
                <div>
                    <label> Title </label>
                    <input type="text" name="title" value={title} onChange={(e)=>setTitle(e.target.value)} />
                </div>
                <div>
                    <label> Artist </label>
                    <input type="text" name="artist" value={artist} onChange={(e)=>setArtist(e.target.value)} />
                </div>
                <div>
                    <label> Rating </label>
                    <input type="number" name="rating" value={rating} onChange={(e)=>setRating(e.target.value)} />
                </div>
                <button type="submit"> Create new song</button>
            </form>
            {
                errors.map((err, i)=>{
                    return(
                        <p style={{color: "red"}} key={i}> {err}</p>
                    )
                })
            }
        </fieldset>
    )
}

export default CreateFormRedirect