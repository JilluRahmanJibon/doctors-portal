import React from "react";
import { Link } from "react-router-dom";
import footer from "../../../assets/images/footer.png";
const Footer = () => {
	return (
		<footer
			style={{
				background: `url(${footer})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
			className="  py-10 sm:px-20 px-10 text-gray-500 ">
			<div className="footer md:grid-cols-none  font-semibold  sm:grid-cols-2 grid">
				<div>
					<span className="footer-title">Services</span>
					<Link className="link link-hover">Emergency Checkup</Link>
					<Link className="link link-hover">Monthly Checkup</Link>
					<Link className="link link-hover">Weekly Checkup</Link>
					<Link className="link link-hover">Deep Checkup</Link>
				</div>
				<div>
					<span className="footer-title">ORAL HEALTH</span>
					<Link className="link link-hover">Fluoride Treatment</Link>
					<Link className="link link-hover">Cavity Filling</Link>
					<Link className="link link-hover">Teath Whitening</Link>
				</div>
				<div>
					<span className="footer-title">OUR ADDRESS</span>
					<p>New York - 101010 Hudson</p>
				</div>
			</div>
			<p className="text-center font-bold pt-16">
				Copyright 2022 All Rights Reserved
			</p>
		</footer>
	);
};

export default Footer;
