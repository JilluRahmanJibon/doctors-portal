import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider";

const Navbar = () => {
	const { user, userLogOut } = useContext(AuthContext)
	const menuItems = (
		<React.Fragment>
			<li>
				<NavLink className="rounded-md" to="/home">
					Home
				</NavLink>
			</li>
			{/* <li>
				<NavLink className="rounded-md" to="/about">
					About
				</NavLink>
			</li> */}
			<li>
				<NavLink className="rounded-md" to="/appointment">
					Appointment
				</NavLink>
			</li>

			<li>
				<NavLink className="rounded-md" to="/reviews">
					Reviews
				</NavLink>
			</li>
			<li><NavLink className="rounded-md" to="/dashboard">
				Dashboard
			</NavLink></li>

			<li>
				{user?.uid ? <>

					<button onClick={() => userLogOut()}>Log Out</button></> : <NavLink className="rounded-md" to="/login">
					Login
				</NavLink>}
			</li>
		</React.Fragment>
	);
	return (
		<div className="max-w-[1440px] mx-auto">
			<div className="navbar bg-base-100">
				<div className="navbar-start flex justify-between w-full">
					<Link to="/" className="btn btn-ghost normal-case text-xl">
						Doctors Portal
					</Link>
					<div className="dropdown  dropdown-end ">
						{" "}
						<label tabIndex={0} className="btn btn-ghost lg:hidden">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</label>
						<ul
							tabIndex={0}
							className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
							{menuItems}
						</ul>
					</div>
				</div>
				<div className="navbar-end hidden lg:flex">
					<ul className="menu menu-horizontal p-0">{menuItems}</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
