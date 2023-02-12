import { Routes, Route } from "react-router-dom";
import NavigationBanner from "components/Navigation";
import Home from "pages/Home";
import Registration from "pages/Registration";
import CreateStory from "pages/CreateStory";
import Detail from "pages/Detail";

const routes = [
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
  {
    path: "/detail",
    element: <Detail />,
  },
];

function App() {
  return (
    <>
      <NavigationBanner />
      <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </>
  );
}

export default App;
