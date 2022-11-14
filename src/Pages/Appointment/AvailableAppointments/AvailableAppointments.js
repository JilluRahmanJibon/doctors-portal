import React, { useEffect, useState } from "react";

import { format } from "date-fns";
import AppointmentOption from "./AppointmentOption";
import BookingModal from "../BookingModal/BookingModal";
const AvailableAppointments = ({ selectedDate }) => {
	const [appointmentOptions, setAppointmentOptions] = useState([]);
	const [treatment, setTreatment] = useState({});
	useEffect(() => {
		fetch("appointmentOptions.json")
			.then(res => res.json())
			.then(data => setAppointmentOptions(data));
	}, []);

	return (
		<section className="my-16 ">
			<h3 className="text-secondary text-center font-bold text-lg">
				Available Appointments on {format(selectedDate, "PP")}
			</h3>
			<div className="pt-16 grid lg:grid-cols-3 md:grid-cols-2 sm:px-20 px-8 gap-12 ">
				{appointmentOptions.map(option => (
					<AppointmentOption
						key={option._id}
						option={option}
						setTreatment={setTreatment}
					/>
				))}
			</div>
			{treatment && (
				<BookingModal
					setTreatment={setTreatment}
					selectedDate={selectedDate}
					treatment={treatment}
				/>
			)}
		</section>
	);
};

export default AvailableAppointments;
