import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavigationBanner from "components/Navigation";
import Home from "pages/Home";
import Registration from "pages/Registration";
import CreateStory from "pages/CreateStory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/register",
    element: <Registration />,
  },
  {
    path: "/create-story",
    element: <CreateStory />,
  },
]);

function App() {
  return (
    <>
      <NavigationBanner />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
