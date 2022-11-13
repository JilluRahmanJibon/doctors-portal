import React from "react";
import appointment from "../../../assets/images/appointment.png";
import doctor from "../../../assets/images/doctor.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
const MakeAppointment = () => {
	return (
		<section
			className="lg:mt-48 md:mt-16  mt-8"
			style={{
				background: `url(${appointment})`,
				backgroundSize: "cover",
			}}>
			<div className="  ">
				<div className="flex xl:w-3/4 xl:px-0 md:flex-row flex-col md:px-16 px-4  mx-auto  ">
					<figure className="lg:w-1/2 md:w-1/2 hidden   -mt-36  md:flex justify-center p-8 sm:p-0">
						<img
							className="rounded-md   w-full   "
							src={doctor}
							alt="appointment"
						/>
					</figure>

					<div className=" lg:w-1/2 md:w-1/2  text-white   py-8 lg:py-12 ">
						<h4 className="font-bold text-primary pb-2">Appointment</h4>
						<h2 className="card-title font-bold text-3xl md:text-4xl ">
							Make an appointment Today
						</h2>
						<p className="py-6 text-justify">
							It is a long established fact that a reader will be distracted by
							the readable content of a page when looking at its layout. The
							point of using Lorem Ipsumis that it has a more-or-less normal
							distribution of letters,as opposed to using 'Content here, content
							here', making it look like readable English. Many desktop
							publishing packages and web page
						</p>
						<PrimaryButton>Get Started</PrimaryButton>
					</div>
				</div>
			</div>
		</section>
	);
};

export default MakeAppointment;
