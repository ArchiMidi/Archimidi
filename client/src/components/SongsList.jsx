
import "../App.css";
import React from 'react';
import { useState, useEffect } from "react";
// import the service file since we need it to send (and get) the data to(from) the server
import service from '../api/service';
import { Link } from "react-router-dom";
import SongCard from "./SongCard";




function SongsList(props) {
  
  const [allSongs, setAllSongs] = useState([]);
  const [search, setSearch] = useState('');
  const [searchFields, setSearchFields] = useState({ title: true, author: true, tags: false })
  
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
  
  
  let words = search.split(' ')
  
  function searchCheck (search, word) {
    for (let i = 0; i <= word.length; i++){
      if (word.substring(i, i+search.length).toLowerCase() === search.toLowerCase()){
        return true
      } 
    }
    return false
  }
  
  const filteredSongs = allSongs.filter(song => {
    const title = song.title.split(' ')
    const author = song.author.split(' ')
    const tags = [...song.tags]
    
    for (let word of words){
      if (searchFields.title === true){
        for (let str of title){
          if (searchCheck(word, str)) {
            return true;
          }
        }
      }
      if (searchFields.author === true){
        for (let str of author){
          if (searchCheck(word, str)) {
            return true;
          }
        }
      }
      if (searchFields.tags === true){
      for (let str of tags){
        if (searchCheck(word, str)) {
          return true;
        }
      }
    }
      return false;
    }
  });
  
  
  // const songsList = allSongs.map(song => <div key={song._id}><h1>{song.title}</h1><a href={song.songUrl} download={`${song.title}_${song.author}.midi`}>Download</a></div>)
  
  return (<>
    <h1>List of Songs</h1>
    <div className="filter">
    <label>Search: </label>
    <input className='searchBar' type="search" name="search" value={search} onChange={e => setSearch(e.target.value)} />
    </div>
    <label>
    Search by Title
    <input
    name="title"
    type="checkbox"
    checked={searchFields.title}
    onChange={e => setSearchFields({ ...searchFields, title: e.target.checked })} />
    </label>
    <br />
    <label>
    Search by Author
    <input
    name="author"
    type="checkbox"
    checked={searchFields.author}
    onChange={e => setSearchFields({ ...searchFields, author: e.target.checked })} />
    </label>
    <br />
    <label>
    Search through the tags
    <input
    name="tags"
    type="checkbox"
    checked={searchFields.tags}
    onChange={e => setSearchFields({ ...searchFields, tags: e.target.checked })} />
    </label>
    <br />
    {/* {songsList} */}
    <div className='songsListContainer'>
    {filteredSongs.length > 0 ? filteredSongs.map(song => <SongCard className='songCard' key={song._id} {...song} />) : <p>No songs match your research</p>}
    </div>
    </>
    );
  }
  
  export default SongsList;
  