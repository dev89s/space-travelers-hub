import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Root from "./routes/Root";
import Rockets from "./components/Rockets";
import Missions from "./components/Missions";
import MyProfile from "./components/My-Profile";
import DragonsList from "./components/DragonsList";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { index: true, element: <Navigate to="/rockets" /> },
        {
          path: "/rockets",
          element: <Rockets />,
        },
        {
          path: "/missions",
          element: <Missions />,
        },
        {
          path: "/dragons",
          element: <DragonsList />,
        },
        {
          path: "/my-profile",
          element: <MyProfile />,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
