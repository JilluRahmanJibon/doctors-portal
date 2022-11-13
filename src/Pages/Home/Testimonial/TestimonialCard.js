import React from "react";

const TestimonialCard = ({ reviewData }) => {
	const { name, review, img, location } = reviewData;
	return (
		<section className="flex flex-col md:flex-row  ">
			<div className="  mx-auto p-8 bg-white rounded-xl   shadow-2xl m-2">
				<p>{review}</p>
				<div className="mt-5 flex items-center">
					<img
						src={img}
						alt=""
						className="rounded-full w-16 border-2 border-primary"
					/>
					<div className="ml-3">
						<h2 className="font-semibold"> {name} </h2>
						<p className="text-gray-500"> {location}</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TestimonialCard;
