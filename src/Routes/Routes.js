import { createBrowserRouter } from "react-router-dom";
import About from "../About/About";
import ContactUs from "../ContactUs/ContactUs";
import Root from "../Layout/Root";
import Appointment from "../Pages/Appointment/Appointment/Appointment";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/LoginPage/Login/Login";
import Register from "../Pages/LoginPage/Register/Register";
import Review from "../Review/Review";
import PrivateRouter from "./PrivateRouter";

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
	}, { path: '/dashboard', element: <PrivateRouter> <Dashboard /></PrivateRouter> }
]);

export default router;
