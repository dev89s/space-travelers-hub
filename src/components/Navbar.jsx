import logo from '../planet.png';

function Navbar() {
  return (
    <>
      <img src={logo} alt="logo" />
      <h1 className="title">Space Traveler&apos;s Hub</h1>
      <ul className="nav-list">
        <li>Rockets</li>
        <li>Missions</li>
      </ul>
    </>
  );
}

export default Navbar;
