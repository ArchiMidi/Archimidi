import React from 'react'
import { useState, useEffect } from 'react'
import service from '../api/service';
import axios from 'axios'

export default function EditSong(props) {

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')

    const songId = props.match.params.id;
    console.log(songId);

    const getSong = () => {
        axios.get(`/api/songs/${songId}`)
            .then(response => {
                console.log(response.data)
                setTitle(response.data.title)
                setAuthor(response.data.author)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getSong();
    }, [])

    const handleSubmit = e => {

        e.preventDefault();
        const requestBody = { title, author };
        axios.put(`/api/${songId}`, requestBody)
            .then(response => {
                console.log(response)
                props.history.push(`/songs/${songId}`)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h3>Edit song</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title: </label>
                <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <label htmlFor="author">Author: </label>
                <input
                    type="text"
                    name="author"
                    value={author}
                    onChange={e => setAuthor(e.target.value)}
                />
                <button type="submit">Update this project</button>
            </form>

        </div>
    )
}
