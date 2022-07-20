import './App.css';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <h3>LOGO</h3>
        <ul className='nav-links'>
            <Link to='/about'>
                <li>About</li>
            </Link>
            <Link to='/housewives'>
                <li>Housewives</li>
            </Link>
            <Link to='/mycast'>
            <   li>MyCast</li>
            </Link>
            <Link to='/form'>
                <li>Form</li>
            </Link>
        </ul>
    </nav>
  );
}

export default NavBar;
