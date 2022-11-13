import React from "react";

const InfoCard = ({ card }) => {
	return (
		<div
			className={`card  sm:card-side bg-base-100 p-6 text-white shadow-xl ${card.bgClass}`}>
			<figure>
				<img className="w-16 sm:w-auto" src={card.icon} alt="img" />
			</figure>
			<div className="sm:card-body">
				<h2 className="card-title"> {card.name} </h2>
				<p>{card.description}</p>
			</div>
		</div>
	);
};

export default InfoCard;
