import React from 'react'
import service from '../api/service';
import SongCard from "./SongCard";
import { useState, useEffect } from "react";

export default function MySongs(props) {

    console.log('My songs user is', props.user)

    const [allSongs, setAllSongs] = useState([])

    const getAllSongs = () => {
        return service
            .findAllSongs()
            .then(response => {
                // console.log("response is: ", response);
                setAllSongs(response)
            })
            .catch(err => console.log('Error while uploading the file: ', err));
    }
    //filter
    useEffect(() => {
        getAllSongs()
    }, [])

    const filteredSongs = allSongs.filter(song => {
        return song.createdBy === props.user._id
    })

    // console.log('filtered songs are', filteredSongs)
    // console.log('MySongs user is ', props.user)

    return (
        <div>
            <h3>My Songs</h3>
            {filteredSongs.length >= 1 ? (
                <>
                    {filteredSongs.map(song => <SongCard key={song._id} {...song} />)}
                </>
            ) : (

                <>
                    <h1>You haven't uploaded any songs yet</h1>
                </>
            )}
        </div>
    )
}