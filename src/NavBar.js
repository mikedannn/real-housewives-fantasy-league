import './App.css';
import { Link } from 'react-router-dom';

function NavBar() {

    const NavStyle = {
        color: 'white'
    };


  return (
    <nav>
      <h3>LOGO</h3>
        <ul className='nav-links'>
            <Link style={NavStyle} to='/about'>
                <li>About</li>
            </Link>
            <Link style={NavStyle} to='/housewives'>
                <li>Housewives</li>
            </Link>
            <Link style={NavStyle} to='/mycast'>
            <   li>MyCast</li>
            </Link>
            <Link style={NavStyle} to='/form'>
                <li>Form</li>
            </Link>
        </ul>
    </nav>
  );
}

export default NavBar;
