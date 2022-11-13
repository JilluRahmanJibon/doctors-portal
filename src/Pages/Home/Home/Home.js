import React from "react";
import Banner from "../Banner/Banner";
import ContactUs from "../ContactUs/ContactUs";
import InfoCards from "../InfoCards/InfoCards";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import ServiceCards from "../ServiceCards/ServiceCards";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
	return (
		<div>
			<Banner /> <InfoCards /> <ServiceCards /> <MakeAppointment />{" "}
			<Testimonial /> <ContactUs />
		</div>
	);
};

export default Home;
