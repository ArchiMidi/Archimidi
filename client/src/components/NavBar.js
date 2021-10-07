import { useLocation, Link } from "react-router-dom"
import { useHistory } from "react-router";
import service from '../api/service'

export default function NavBar(props) {
    // console.log('logged in user is >>>>>>>>>>>>>>>>>>>>>>>>>>>', props.user)
    const path = useLocation().pathname
    const history = useHistory()
    const { search, setSearch } = props;

    const handleSearch = e => {
        e.preventDefault()
        history.push('/');
    }

    const handleLogout = () => {
        service.logout()
            .then(() => {
                props.setUser(null)
            })
    }

    const searchBar =
        <form>
            <input className='searchBar' type="search" name="search" value={search} onChange={e => setSearch(e.target.value)} />
            {path !== '/' && <button onClick={handleSearch}>Search: </button>}
        </form>

    return (
        <nav className='navBar'>
            {props.user ? (
                <>
                    {path !== '/' &&
                        <Link to='/'>
                            <p className='navElements'>Home</p>
                        </Link>

                    }

                    {searchBar}

                    <Link to="/" onClick={() => handleLogout()}>
                        <p className='navElements'>Logout</p>
                    </Link>

                    {path !== '/songs/add' &&
                        <Link to='/songs/add'>
                            <p className='navElements'>Upload Song</p>
                        </Link>}

                    <Link to='/mysongs'>
                        <p className='navElements'>My Songs</p>
                    </Link>
                </>
            ) : (
                <>
                    {path !== '/' &&
                        <Link to='/'>
                            <p className='navElements'>Home</p>
                        </Link>}

                    {searchBar}

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