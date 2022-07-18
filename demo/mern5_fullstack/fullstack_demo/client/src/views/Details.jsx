import React, {useEffect, useState} from 'react'
import axios from "axios"
import {useParams} from "react-router-dom"

// 1. get id from params (useParams)
// 2. display info on load (useEffect)
// 3. for the info: useState
// 4. grab info from backend : axios

const Details = () => {
  const [song, setSong] = useState()
  const {id} = useParams()

  useEffect(()=>{
    axios.get(`http://localhost:8000/api/songs/${id}`)
      .then(res=>setSong(res.data))
      .catch(err=>console.log(err))
  },[])

  return (
    <fieldset>
      <legend> Details.jsx</legend>
      {
        song?
        <div>
          <h5> Title: {song.title}</h5>
          <h5> Artist: {song.artist}</h5>
          <h5> Rating: {song.rating}</h5>
        </div>:
        <h1> The song is not available</h1>

      }

    </fieldset>
  )
}

export default Details