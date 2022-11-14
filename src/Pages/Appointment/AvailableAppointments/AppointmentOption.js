import React from "react";

const AppointmentOption = ({ option, setTreatment }) => {
	const { name, slots } = option;
	return (
		<div className="card shadow-xl  ">
			<div className="card-body items-center text-center">
				<h2 className="card-title text-secondary font-bold"> {name}</h2>
				<p>{slots.length > 0 ? slots[0] : "Try Another day"}</p>
				<p>
					{slots.length} {slots.length > 1 ? "SPACES" : "SPACE"} AVAILABLE
				</p>
				<div className="card-actions ">
					<label
						disabled={slots.length === 0}
						onClick={() => setTreatment(option)}
						htmlFor="booking-modal"
						className="btn text-white btn-primary font-semibold">
						Book Appointment
					</label>
				</div>
			</div>
		</div>
	);
};

export default AppointmentOption;
