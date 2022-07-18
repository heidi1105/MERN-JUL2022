import React, { useEffect, useState } from 'react'
import CreateFormUpdate from '../components/CreateFormUpdate'
import DisplayTable from '../components/DisplayTable'
import axios from "axios"

const Main = () => {
    const [songlist, setSonglist] = useState([])
    const [refresh, setRefresh] = useState(true)

    const refreshList =() =>{
        setRefresh(!refresh)
    }

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/songs`)
            .then(res=>setSonglist(res.data))
            .catch(err=>console.log(err))
    },[refresh])

    return (
        <fieldset>
            <legend> Main.jsx</legend>
            <CreateFormUpdate updateList={refreshList}/>
            <DisplayTable songlist={songlist}/>
        </fieldset>
    )
}

export default Main