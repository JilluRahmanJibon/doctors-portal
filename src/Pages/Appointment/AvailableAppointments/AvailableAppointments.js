import React, { useState } from "react";
import { format } from "date-fns";
import AppointmentOption from "./AppointmentOption";
import BookingModal from "../BookingModal/BookingModal";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Shared/Loading/Loading";
const AvailableAppointments = ({ selectedDate }) => {
	const [treatment, setTreatment] = useState({});
	const date = format(selectedDate, 'PP')
	const { data: appointmentOptions = [], refetch, isLoading } = useQuery({
		queryKey: ['appointmentOptions', date],
		queryFn: () => fetch(`http://localhost:5000/appointmentOptions?date=${date}`).then(res => res.json())
	})
	if (isLoading) {
		return <Loading />
	}
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
					refetch={refetch}
				/>
			)}
		</section>
	);
};

export default AvailableAppointments;
