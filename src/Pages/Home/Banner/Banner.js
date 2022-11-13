import React from "react";
import chair from "../../../assets/images/chair.png";
import bg from "../../../assets/images/bg.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
const Banner = () => {
	return (
		<div
			className="mx-5 py-16"
			style={{
				background: `url(${bg})`,
				backgroundSize: "cover",
			}}>
			{" "}
			<div className="hero">
				<div className="sm:hero-content flex-col lg:flex-row-reverse">
					<img alt="" src={chair} className=" lg:w-1/2 rounded-lg shadow-2xl" />
					<div>
						<h1 className="sm:text-5xl text-3xl font-bold">
							Your New Smile Starts Here
						</h1>
						<p className="py-6">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the
						</p>
						<PrimaryButton>Get Started</PrimaryButton>
					</div>
				</div>
			</div>{" "}
		</div>
	);
};

export default Banner;
