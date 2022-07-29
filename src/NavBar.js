import './App.css';
import { Link } from 'react-router-dom';

function NavBar() {

    const NavStyle = {
        color: 'white'
    };


  return (
    <nav>
      <h1>Real Housewives Fantasy League</h1>
        <ul className='nav-links'>
            <Link style={NavStyle} to='/about'>
                <li>About</li>
            </Link>
            <Link style={NavStyle} to='/housewivespage'>
                <li>Housewives</li>
            </Link>
            <Link style={NavStyle} to='/mycastcontainer'>
            <   li>MyCast</li>
            </Link>
            <Link style={NavStyle} to='/form'>
                <li>Form</li>
            </Link>
            <Link style={NavStyle} to='/searchhousewives'>
                <li>Search</li>
            </Link>
        </ul>
    </nav>
  );
}

export default NavBar;
