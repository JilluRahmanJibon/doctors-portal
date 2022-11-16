import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BiError } from 'react-icons/bi';
import { AuthContext } from "../../../Contexts/AuthProvider";
import toast from "react-hot-toast";
const Register = () => {
	const { createUser, updateUserInfo, continueWithGoogle } = useContext(AuthContext)
	const [signUpError, setSignUpError] = useState(null)
	const location = useLocation()
	const from = location.state?.from?.pathname || '/'
	const navigate = useNavigate()
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();
	const handleRegister = data => {
		setSignUpError(null);
		createUser(data.email, data.password).then(result => {
			// const user = result.user
			navigate(from, { replace: true })
			updateUserInfo(data.name)
			toast.success('Successfully create Account', { duration: 1500 })
		}).catch(err => {
			setSignUpError(err.message);
		})
	};
	const continueGoogle = () => {
		continueWithGoogle().then(result => {
			const user = result.user
			navigate(from, { replace: true })
			console.log(user);
		}).catch(err => {
			console.log(err);
		})

	}
	return (
		<div className=" h-[700px] flex justify-center items-center">
			<div className="w-96 p-7 shadow-lg rounded-md"> {signUpError && <p className="text-center font-bold text-sm text-red-500 mb-2">{signUpError.replaceAll("Firebase:", '').replaceAll('Error', "Error:").replaceAll('(auth/', '').replaceAll(')', '')}</p>}
				<h1 className="text-xl font-bold text-center">Sign Up </h1>
				<form onSubmit={handleSubmit(handleRegister)}>
					<div className="form-control w-full max-w-xs">
						<label htmlFor="name" className="label">
							<span className="label-text font-semibold">Name </span>
						</label>
						<input
							id="name"
							type="text"
							className="input input-bordered w-full max-w-xs"
							{...register("name", { required: "Name is required" })}
						/>
						{errors.name && (
							<p className="text-red-500 font-semibold flex items-center gap-1 mt-1">
								<BiError />	{errors.name?.message}
							</p>
						)}
					</div>
					<div className="form-control w-full max-w-xs">
						<label htmlFor="email" className="label">
							<span className="label-text font-semibold">Email </span>
						</label>
						<input
							id="email"
							type="email"
							className="input input-bordered w-full max-w-xs"
							{...register("email", { required: "Email is required" })}
						/>
						{errors.email && (
							<p className="text-red-500 font-semibold flex items-center gap-1 mt-1">
								<BiError />	{errors.email?.message}
							</p>
						)}
					</div>
					<div className="form-control w-full max-w-xs">
						<label htmlFor="password" className="label">
							<span className="label-text font-semibold">Password </span>
						</label>
						<input
							id="password"
							type="password"
							className="input input-bordered w-full max-w-xs"
							{...register("password", {
								required: "Password is required", pattern: { value: /(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])/, message: 'password must have uppercase number & special character' },
								minLength: {
									value: 6,
									message: "Password should be at least 6 characters",
								},
							})}
						/>
						{errors.password && (
							<p className="text-red-500 font-semibold flex items-center gap-1 mt-1">
								{errors.password.message && <BiError className="mt-1" />}	{errors.password?.message}
							</p>
						)}
					</div>
					<input
						type="submit"
						className="w-full btn-accent btn mt-5"
						value="Sign Up"
					/>
				</form>
				<p className="text-sm pt-4  text-center ">
					Already have an Account?{" "}
					<Link to="/login" className="text-primary font-semibold ">
						Login
					</Link>
				</p>
				<p className="divider text-accent">OR</p>
				<button onClick={continueGoogle} className="btn btn-outline btn-accent w-full">
					Continue With Google
				</button>
			</div>
		</div>
	);
};

export default Register;
