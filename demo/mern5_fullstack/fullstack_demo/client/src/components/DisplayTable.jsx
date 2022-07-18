import React, { useEffect, useState } from 'react'
import axios from "axios"

// 1. grab info on load (axios + useEffect)
// 2. store info with useState

const DisplayTable = () => {
    // all songs : array of objects [{title:...}, {}, {}]
    const [songlist, setSonglist] = useState([])

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/songs`)
            .then(res=>setSonglist(res.data))
            .catch(err=>console.log(err))
    },[])

    return (
        <fieldset>
            <legend> DisplayTable.jsx</legend>
            <table>
                <thead>
                    <tr>
                        <th> Title </th>
                        <th> Artist </th>
                        <th> Rating </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        songlist.map((song, i)=>{
                            return(
                                <tr>
                                    <td> {song.title}</td>
                                    <td> {song.artist}</td>
                                    <td> {song.rating}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>

            </table>
        </fieldset>
    )
}

export default DisplayTable