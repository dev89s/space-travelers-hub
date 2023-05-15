import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Root() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main className="main-section">
        <Outlet />
      </main>
    </>
  );
}

export default Root;
