import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BiError } from "react-icons/bi";
import { AuthContext } from "../../../Contexts/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
	const { loginUser, continueWithGoogle } = useContext(AuthContext)
	const [loginError, setLoginError] = useState(null)
	const location = useLocation()
	const from = location.state?.from?.pathname || '/'
	const navigate = useNavigate()
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const handleLogin = data => {
		setLoginError(null);
		loginUser(data.email, data.password).then(result => {
			navigate(from, { replace: true })
			const user = result.user
			console.log(user);
		}).catch(err => {
			console.log(err);
			setLoginError(err.message)
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
	const handleResetPass = () => {
		toast.error('sorry this feature are not available at the moment please try again')
	}
	return (
		<div className="h-[800px] flex justify-center items-center">
			<div className="shadow-lg w-96 p-7 rounded-lg">
				{loginError && <p className="text-center font-bold text-sm text-red-500 mb-2">{loginError.replaceAll("Firebase:", '').replaceAll('Error', "Error:").replaceAll('(auth/', '').replaceAll(')', '')}</p>}
				<h1 className="text-xl   text-center text-accent">Login</h1>
				<form onSubmit={handleSubmit(handleLogin)}>
					<div className="form-control w-full ">
						<label htmlFor="email" className="label font-semibold">
							<span className="label-text">Email </span>
						</label>
						<input
							id="email"
							type="email"
							className="input input-bordered w-full "
							{...register("email", {
								required: "Email Address is required !",
								pattern: /^\S+@\S+$/i,
							})}
						/>
						{errors.email && (
							<p className="text-red-500 font-semibold flex items-center gap-1 mt-1">
								<BiError />	{errors.email?.message}
							</p>
						)}
					</div>
					<div className="form-control w-full ">
						<label htmlFor="password" className="label font-semibold">
							<span className="label-text">Password </span>
						</label>
						<input
							id="password"
							type="password"
							className="input input-bordered w-full "
							{...register("password", {
								required: "Password is required !",
								minLength: {
									value: 6,
									message: "Password should be at least 6 characters",
								},
							})}
						/>
						{errors.password && (
							<p className="text-red-500 font-semibold flex items-center gap-1 mt-1">
								<BiError />	{errors.password?.message}
							</p>
						)}
						<label className="mt-1 mb-4 inline-block">
							<span onClick={handleResetPass} className="cursor-pointer">Forgot Password? </span>
						</label>
					</div>

					<input
						className="w-full  bg-accent text-white btn"
						value="Login"
						type="submit"
					/>
				</form>
				<p className="text-sm text-center pt-4">
					New to Doctors Portal?{" "}
					<Link className="text-primary font-semibold " to="/register">
						Create New Account
					</Link>
				</p>
				<div className="divider text-accent">OR</div>
				<button onClick={continueGoogle} className="w-full uppercase btn btn-outline btn-accent">
					Continue with google
				</button>
			</div>
		</div>
	);
};

export default Login;
