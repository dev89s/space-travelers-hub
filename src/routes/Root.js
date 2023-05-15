import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Root() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Root;
