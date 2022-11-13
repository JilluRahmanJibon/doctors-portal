import { createBrowserRouter } from "react-router-dom";
import About from "../About/About";
import Appointment from "../Appointment/Appointment";
import ContactUs from "../ContactUs/ContactUs";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/LoginPage/Login/Login";
import Register from "../Pages/LoginPage/Register/Register";
import Review from "../Review/Review";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{ path: "/", element: <Home /> },
			{ path: "/home", element: <Home /> },
			{ path: "/about", element: <About /> },
			{ path: "/appointment", element: <Appointment /> },
			{ path: "/reviews", element: <Review /> },
			{ path: "/contactUs", element: <ContactUs /> },
			{ path: "/login", element: <Login /> },
			{ path: "/register", element: <Register /> },
		],
	},
]);

export default router;
