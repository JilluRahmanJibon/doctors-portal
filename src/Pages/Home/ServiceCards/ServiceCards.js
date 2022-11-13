import React from "react";
import fluoride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import treatment from "../../../assets/images/treatment.png";
import whitening from "../../../assets/images/whitening.png";
import ServiceCard from "./ServiceCard";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const ServiceCards = () => {
	const serviceData = [
		{
			id: 1,
			icon: fluoride,
			name: "Fluoride Treatment",
			description:
				"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
		},
		{
			id: 2,
			icon: cavity,
			name: "Cavity Filling",
			description:
				"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
		},
		{
			id: 3,
			icon: whitening,
			name: "Teeth Whitening",
			description:
				"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
		},
	];
	return (
		<div className="my-20">
			<h4 className="text-primary uppercase text-xl text-center font-bold">
				our services
			</h4>
			<h4 className=" font-semibold text-4xl pt-2 text-center">
				Services We Provide
			</h4>
			<div className="grid lg:grid-cols-3 px-4 pt-8 lg:px-12 md:grid-cols-2 gap-8">
				{serviceData.map(service => (
					<ServiceCard key={service.id} service={service} />
				))}
			</div>
			<div className="lg:mt-24 md:mt-16 mt-8">
				<div className="flex xl:w-3/4 xl:px-0 lg:flex-row flex-col md:px-16 px-4 items-center  mx-auto bg-base-100 ">
					<figure className="lg:w-1/2 flex justify-center p-8 sm:p-0">
						<img
							className="rounded-md lg:w-2/3 w-full sm:w-3/4  "
							src={treatment}
							alt="treatment"
						/>
					</figure>

					<div className=" lg:w-1/2 sm:pt-8 lg:pt-0">
						<h2 className="card-title font-bold text-3xl md:text-5xl ">
							Exceptional Dental Care, on Your Terms
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
		</div>
	);
};

export default ServiceCards;
