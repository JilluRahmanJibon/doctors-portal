import React from "react";

const PrimaryButton = ({ children }) => {
	return (
		<button className=" bg-gradient-to-r from-primary text-white to-secondary btn-primary btn uppercase">
			{children}
		</button>
	);
};

export default PrimaryButton;
