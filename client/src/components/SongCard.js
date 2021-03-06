import { Link } from "react-router-dom";
import React from 'react'

export default function SongCard({ title, _id, songUrl, author, tags }) {


    return (
        <div className='songCard'>
            <Link className="Link" to={`/songs/${_id}`}>
                <h3>{title}</h3>
                <h4>{author}</h4>
            </Link>
                <div className='tagsBox'>
                {tags && tags.map(tag => <p>{tag}</p>)}
                </div>
            <a href={songUrl} download={`${title}_${author}.mid`}>Download</a>
        </div>
    )
}
