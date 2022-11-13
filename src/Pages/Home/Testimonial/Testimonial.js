import React from "react";
import quote from "../../../assets/icons/quote.svg";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import TestimonialCard from "./TestimonialCard";
const Testimonial = () => {
	const reviews = [
		{
			id: 1,
			review:
				"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
			img: people1,
			name: "Winson Herry",
			location: "California",
		},
		{
			id: 2,
			review:
				"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
			img: people2,
			name: "Winson Herry",
			location: "California",
		},
		{
			id: 3,
			review:
				"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
			img: people3,
			name: "Winson Herry",
			location: "California",
		},
	];
	return (
		<section className="md:px-16 px-4 py-20">
			<div className="flex pb-6 justify-between">
				<div>
					<h5 className="text-primary pb-2">Testimonial </h5>
					<h1 className="sm:text-3xl text-2xl font-semibold ">
						What Our Patients Says
					</h1>
				</div>
				<img src={quote} className="md:w-44 w-24 " alt="quote" />
			</div>
			<div className="grid lg:grid-cols-3 lg:gap-12 md:gap-8 gap-3 md:grid-cols-2">
				{reviews.map(review => (
					<TestimonialCard key={review.id} reviewData={review} />
				))}
			</div>
		</section>
	);
};

export default Testimonial;
