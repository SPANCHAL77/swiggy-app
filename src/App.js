import "./App.css";
import About from "./components/About";
import Body from "./components/Body";
import Header from "./components/Header";
import { createBrowserRouter } from "react-router-dom";
import { Outlet } from "react-router-dom";
import MenuView from "./components/MenuView";

// Layout component with Header and Outlet for nested routes
const AppLayout = () => {
	return (
		<div className="App">
			<Header />
			<Outlet /> {/* This is where child route components render */}
		</div>
	);
};

// Define routes
export const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		children: [
			{
				path: "",
				element: <Body />,
			},
			{
				path: "about",
				element: <About />,
			},
			{
				path: "restaurant/view/:resId",
				element: <MenuView />,
			},
		],
	},
]);

export default AppLayout;
