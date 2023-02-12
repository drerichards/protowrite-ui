import { Routes, Route } from "react-router-dom";
import NavigationBanner from "components/Navigation";
import Home from "components/Home";
import Registration from "components/Registration";
import CreateStory from "components/CreateStory";
import Hero from "components/Hero";
import Detail from "components/Detail";

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
		path: "/hero",
		element: <Hero />,
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
