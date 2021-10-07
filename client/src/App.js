import React from "react";
import { Switch, Route } from "react-router-dom";
import AddSong from "./components/AddSong";
import SongsList from "./components/SongsList";
import NavBar from "./components/NavBar";
import * as PATHS from "./utils/paths";
import SongDetails from "./components/SongDetails";
import Signup from "./components/Signup";
import { useState } from 'react'
import Login from "./components/Login";
import { useHistory } from "react-router";
import MySongs from "./components/MySongs";
import EditSong from "./components/EditSong";
import { Link } from "react-router-dom";


function App(props) {
  const [search, setSearch] = useState(props.search);
  const [user, setUser] = useState(props.user)
  const history = useHistory()
  const addUser = user => {
    setUser(user);
  }


  function NotFound() {

    return (<><h1>404 - Not Found</h1>  <Link to='/'>Return home</Link></>)
  }


  return (
    <div className="App">

      <NavBar user={user} setUser={setUser} search={search} setSearch={setSearch} currentPage={props}></NavBar>
      <div className='mainContainer'>
        <Switch>
          <Route exact path={PATHS.HOMEPAGE}
            render={props => <SongsList search={search} setSearch={setSearch} />} />
          <Route exact path="/songs/add"
            render={user ? props => <AddSong user={user} setUser={setUser} /> : props => <Login setUser={addUser}{...props} />
            } />
          <Route exact path="/songs/:id"
            render={user ? props => <SongDetails user={user}{...props} /> : props => <SongDetails user={null}{...props} />
            } />

          <Route exact path="/signup"
            render={props => <Signup setUser={addUser}{...props} />} />
          <Route exact path="/login"
            render={props => <Login setUser={addUser}{...props} />} />
          <Route exact path="/mysongs"
            render={props => <MySongs user={user} setUser={setUser} />} />
          <Route exact path="/songs/edit/:id" component={EditSong} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
