import React, { useContext } from "react";
import { format } from "date-fns";
import { AuthContext } from "../../../Contexts/AuthProvider";

const BookingModal = ({ treatment, selectedDate, setTreatment }) => {
	const { user } = useContext(AuthContext)
	const date = format(selectedDate, "PP");
	const handleBooking = e => {
		e.preventDefault();
		const form = e.target;
		const slot = form.slot.value;
		const name = form.name.value;
		const email = form.email.value;
		const number = form.number.value;
		setTreatment(null);
		const booking = {
			appointmentDate: date,
			treatment: name,
			slot,
			patient: treatment.name,
			email,
			number,
		};
		console.log(booking);
	};
	return (
		<div>
			<input
				required
				type="checkbox"
				id="booking-modal"
				className="modal-toggle"
			/>
			<div className="modal">
				<div className="modal-box relative">
					<label
						htmlFor="booking-modal"
						className="btn btn-sm btn-circle absolute right-2 top-2">
						✕
					</label>
					<h3 className="text-lg pb-10 font-bold">{treatment?.name}</h3>
					<form onSubmit={handleBooking} className="flex flex-col gap-4">
						<input
							required
							defaultValue={date}
							disabled
							type="text"
							className="input w-full border-2 bg-gray-300  "
						/>
						<select name="slot" className="select select-bordered w-full  ">
							{treatment.slots?.map((slot, idx) => (
								<option key={idx} defaultValue={slot}>
									{slot}
								</option>
							))}
						</select>

						<input
							name="name"
							defaultValue={user?.displayName}
							required
							type="text"
							placeholder="Full Name"
							className="  input w-full border-2   border-gray-200 "
						/>
						<input
							name="email"
							required
							type="email"
							defaultValue={user?.email}
							disabled
							placeholder="Email"
							className="input w-full border-2   border-gray-200 "
						/>
						<input
							name="number"
							required
							type="number"
							min="10"
							minLength={10}
							placeholder="Phone Number"
							className="input w-full border-2   border-gray-200 "
						/>

						<input
							type="submit"
							value="Submit"
							className="input  btn btn-accent text-white uppercase w-full "
						/>
					</form>
				</div>
			</div>
		</div>
	);
};

export default BookingModal;
