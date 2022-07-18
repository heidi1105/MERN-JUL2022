import React, { useEffect, useState } from 'react'
import CreateFormUpdate from '../components/CreateFormUpdate'
import DisplayTable from '../components/DisplayTable'
import axios from "axios"

const Main2 = () => {
    const [songlist, setSonglist] = useState([])

    const refreshList =(newSong) =>{
        setSonglist([...songlist, newSong])
    }

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/songs`)
            .then(res=>setSonglist(res.data))
            .catch(err=>console.log(err))
    },[])

    return (
        <fieldset>
            <legend> Main2.jsx</legend>
            <CreateFormUpdate updateList={refreshList}/>
            <DisplayTable songlist={songlist}/>
        </fieldset>
    )
}

export default Main2