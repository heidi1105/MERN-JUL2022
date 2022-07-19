import React, { useEffect, useState } from 'react'
import axios from "axios"
import DisplayTable from '../components/DisplayTable'

const Dashboard = () => {
  const [songlist, setSonglist] = useState([])

  useEffect(()=>{
      axios.get(`http://localhost:8000/api/songs`)
          .then(res=>setSonglist(res.data))
          .catch(err=>console.log(err))
  },[])

  const removeFromList = (deleteId) =>{
    const filteredList = songlist.filter((eachSong, i)=>{
      return(
        eachSong._id !== deleteId
      )
    })
    setSonglist(filteredList)
  }


  return (
    <fieldset>
        <legend> Dashboard.jsx</legend>
        <h1> Dashboard </h1> 
        {
          songlist?
          <DisplayTable songlist={songlist} updateList={removeFromList}/>:
          <h1> No songs now</h1>
        }
        
        
    </fieldset>
  )
}

export default Dashboard