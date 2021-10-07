import { useLocation, Link } from "react-router-dom"
import { useState } from "react";
import service from '../api/service'

export default function NavBar(props) {
  // console.log('logged in user is >>>>>>>>>>>>>>>>>>>>>>>>>>>', props.user)
  const path = useLocation().pathname
  const {search, setSearch} = props;

  const handleLogout = () => {
    service.logout()
      .then(() => {
        props.setUser(null)
      })
  }

  return (
    <nav className='navBar'>
      {props.user ? (
        <>
          {path !== '/' &&
            <Link to='/'>
              <p className='navElements'>Home</p>
            </Link>}

          <form>
            <button>Search: </button>
            <input className='searchBar' type="search" name="search" value={search} onChange={e => setSearch(e.target.value)} />
          </form>

          <Link to="/" onClick={() => handleLogout()}>
            <p className='navElements'>Logout</p>
          </Link>

          {path !== '/songs/add' &&
            <Link to='/songs/add'>
              <p className='navElements'>Upload Song</p>
            </Link>}

          <Link to='/mysongs'>
            <p className='navElements'>My songs</p>
          </Link>
        </>
      ) : (
        <>
          {path !== '/' &&
            <Link to='/'>
              <p className='navElements'>Home</p>
            </Link>}

          {path === '/login' && <p>don't have an account?</p>}

          {path !== '/signup' && <>
            <Link to='/signup'>
              <p className='navElements'>Sign up</p>
            </Link>
          </>}

          {(path !== '/signup' && path !== '/login') && <p>or</p>}

          {path === '/signup' && <p>already  a user?</p>}

          {path !== '/login' &&
            <Link to='/login'>
              <p className='navElements'>Log in</p>
            </Link>
          }

          {(path !== '/signup' && path !== '/login') && <p>to upload a song </p>}
        </>
      )}
    </nav>
  )
}