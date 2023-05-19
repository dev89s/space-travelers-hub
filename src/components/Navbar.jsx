import { NavLink } from 'react-router-dom';
import logo from '../planet.png';
import '../style/Navbar.css';

function Navbar() {
  return (
    <div className="nav-container">
      <div className="navbar">
        <NavLink className="logo" to="/">
          <img className="logo-image" src={logo} alt="logo" />
          <h1 className="title">Space Traveler&apos;s Hub</h1>
        </NavLink>
        <ul className="nav-list">
          <li>
            <NavLink to="/rockets">Rockets</NavLink>
          </li>
          <li>
            <NavLink to="/missions">Mission</NavLink>
          </li>
          <li>
            <NavLink to="/dragons">Dragons</NavLink>
          </li>
          <div className="line" />
          <li>
            <NavLink to="/my-profile">My Profile</NavLink>
          </li>
        </ul>
      </div>
      <hr />
    </div>
  );
}

export default Navbar;
