import React from "react";
import appointment from "../../../assets/images/appointment.png";
const ContactUs = () => {
	return (
		<section
			className="py-12 px-4 sm:px-0"
			style={{
				background: `url(${appointment})`,
				backgroundSize: "cover",
				backgroundPosition: "",
			}}>
			<div className="text-center mb-6">
				{" "}
				<h3 className="text-primary  font-bold">Contact Us </h3>
				<h1 className="text-2xl font-semibold text-white ">
					Stay connected with us
				</h1>
			</div>
			<form className="flex flex-col gap-4  items-center">
				<input
					type="Email"
					required
					placeholder="Email Address*"
					className="input w-full max-w-sm"
				/>
				<input
					type="text"
					placeholder="Subject*"
					required
					className="input w-full max-w-sm"
				/>
				<textarea
					className="textarea w-full max-w-sm"
					placeholder="Your message*"
					required></textarea>
				<button type="submit" className=" bg-gradient-to-r from-primary text-white to-secondary btn-primary py-2 px-5 rounded-md ">
					Submit
				</button>
			</form>
		</section>
	);
};

export default ContactUs;
