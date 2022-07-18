import React, { useEffect, useState } from 'react'
import axios from "axios"
import {Link} from "react-router-dom"

// 1. grab info on load (axios + useEffect)
// 2. store info with useState

const DisplayTable = (props) => {


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
                        props.songlist.map((song, i)=>{
                            return(
                                <tr key={i}>
                                    <td><Link to={`/songs/${song._id}`}> {song.title}</Link></td>
                                    <td> {song.artist}</td>
                                    <td> {song.rating}</td>
                                    <td> <Link to={`/songs/${song._id}/edit`}> Edit</Link></td>
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