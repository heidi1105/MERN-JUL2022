import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useParams, useNavigate } from "react-router-dom"

// pre-populated form
// 1. grab id from params (useParams)
// 2. display info on load (useEffect)
// 3. input : useState
// 4. grab info from backend: axios

const UpdatePage = () => {
  const [title, setTitle] = useState("")
  const [artist, setArtist] = useState("")
  const [rating, setRating] = useState(5)

  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`http://localhost:8000/api/songs/${id}`)
      .then(res => {
        const song = res.data
        setTitle(song.title)
        setArtist(song.artist)
        setRating(song.rating)
      })
      .catch(err => console.log(err))
  }, [])

  const handleSubmit =(e) =>{
    e.preventDefault()
    axios.put(`http://localhost:8000/api/songs/${id}`, {title, artist, rating})
      .then(res=>navigate("/"))
      .catch(err=>console.log(err))
  }

  return (
    <fieldset>
      <legend> Update.jsx</legend>
      <h1> Update form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label> Title </label>
          <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label> Artist </label>
          <input type="text" name="artist" value={artist} onChange={(e) => setArtist(e.target.value)} />
        </div>
        <div>
          <label> Rating </label>
          <input type="number" name="rating" value={rating} onChange={(e) => setRating(e.target.value)} />
        </div>
        <button type="submit"> Update the song</button>

      </form>
    </fieldset>
  )
}

export default UpdatePage