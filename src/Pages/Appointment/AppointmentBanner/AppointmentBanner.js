import chair from "../../../assets/images/chair.png";
import bg from "../../../assets/images/bg.png";
import { DayPicker } from "react-day-picker";
const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
	return (
		<header
			style={{
				background: `url(${bg})`,
				backgroundSize: "cover",
			}}>
			<div className="hero min-h-[90vh] lg:pt-0 pt-11 pb-5 lg:pb-0 ">
				<div className="hero-content gap-10 flex-col lg:flex-row-reverse">
					<img
						alt="dentist chair"
						src={chair}
						className="sm:max-w-lg rounded-lg shadow-2xl"
					/>
					<div>
						<DayPicker
							mode="single"
							selected={selectedDate}
							onSelect={setSelectedDate}
						/>
					</div>
				</div>
			</div>
		</header>
	);
};

export default AppointmentBanner;
