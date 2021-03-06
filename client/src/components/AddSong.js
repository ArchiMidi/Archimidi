import React from 'react';
import { useState, useEffect } from "react";
// import the service file since we need it to send (and get) the data to(from) the server
import service from '../api/service';
import { useHistory } from 'react-router';

function AddSong(props) {
  let history = useHistory()

  const loggedInUser = props.user._id

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [songUrl, setSongUrl] = useState('');
  const [createdBy, setCreatedBy] = useState(loggedInUser)
  const [tag, setTag] = useState('')
  const [tags, setTags] = useState([])
  const [tagToRemove, setTagToRemove] = useState(null)
  const [uploadStage, setUploadStage] = useState(0)
  const [message, setMessage] = useState(null)

  // ******** this method handles just the file upload ********
  const handleFileUpload = e => {
    // console.log("The file to be uploaded is: ", e.target.files[0]);
    setUploadStage(1)
    const uploadData = new FormData();

    // imageUrl => this name has to be the same as in the model since we pass
    // req.body to .create() method when creating a new thing in '/api/things/create' POST route
    uploadData.append('songUrl', e.target.files[0]);

    service
      .handleUpload(uploadData)
      .then(response => {
        // console.log("response is: ", response);
        // after the console.log we can see that response carries 'secure_url' which we can use to update the state
        setSongUrl(response.secure_url);
        setUploadStage(2)
      })
      .catch(err => console.log('Error while uploading the file: ', err));
  };

  // this method submits the form
  const handleSubmit = e => {
    e.preventDefault();
    if (title.length > 0) {
      service
        .saveNewSong({ title, author, songUrl, createdBy, tags })
        .then(res => {
          console.log('added new song: ', res);
          history.push(`/songs/${res._id}`)
        })
        .catch(err => console.log('Error while adding the new song: ', err));
    } else {
      setMessage('enter a title')
    }
  };


  const saveButton = <button className='bottomMargin' type="submit">Save new song</button>
  const loadIcon = <p>Loading</p>
  const waitingIcon = <p>Waiting for a file...</p>


  const HandleTagSubmit = e => {
    e.preventDefault();
    setMessage(null)
    setTags(tags => {
      var set = [tag, ...tags].map(el => {
        return el.toLowerCase()
      }).filter((t, i, arr) => {
        if (t === '') {
          setMessage('cannot add an empty tag')
          return false
        }
        if (arr.indexOf(t) === i) return true
        else {
          setMessage(`${t} is already a tag`)
          return false
        }
      })
      return set
    }
    )
    setTag('')
  }

  useEffect(() => {
    (tagToRemove !== null &&
      setTags([...tags].filter(tagChecked => tagChecked !== tagToRemove))
    )
    return () => {
      setTagToRemove(null)
    }
  }, [tagToRemove, tags])

  const handleDeleteTag = e => {
    e.preventDefault()
    setTagToRemove(e.target.tagButton.value)
  }

  useEffect(() => {
    if (tags.length >= 5) {
      setMessage('max tags number: 5')
    }
  }, [tags])


  return (
    <div className='secondaryContainer'>
      <h2>New Song</h2>
      <form onSubmit={handleSubmit} className='baseForm'>
        {/* <label> Name </label> */}
        <input type="text" name="title" value={title} onChange={e => setTitle(e.target.value)} placeholder='Title' />

        {/* <label>Author</label> */}
        <input className='bottomMargin'type="text" name="author" value={author} onChange={e => setAuthor(e.target.value)} placeholder='Author' />
        <div>
          <label className='fileUpload'>
          Choose a file
            <input type="file" onChange={handleFileUpload} />
          </label>
          <div>{uploadStage > 1 ? saveButton : uploadStage > 0 ? loadIcon : waitingIcon}</div>
        </div>
      </form>

      {tags.length < 5 &&

        <form onSubmit={HandleTagSubmit} className='baseForm'>
          <input type="text" name="tag" value={tag} placeholder='Add tags' onChange={e => setTag(e.target.value)} />
          <button type="submit">Add</button>

        </form>}


      {message && <p>{message}</p>}
      <div className='tagsBox'>
      {tags.map(tag =>
        <>
          <p>{tag}</p>
          <form onSubmit={handleDeleteTag} >
            <button name='tagButton' type="submit" value={tag} >x</button>
          </form>
        </>
      )}
      </div>
    </div>
  );
}


export default AddSong;
