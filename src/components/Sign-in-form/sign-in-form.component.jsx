import React, { useState } from "react";
import "./sign-in-form.styles.scss";

import InputBox from "../Input-box/input-box.component";
import ButtonBox from "../Button-box/button-box.component";
import GoogleBtn from "../Google-btn/google-btn.component";

import { Link } from "react-router-dom";

import { signInWithGoogle, auth } from "../../pages/firebase/firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";

const SignInForm = () => {
	const [formValues, setFormvalues] = useState({
		email: "",
		password: "",
	});

	const { email, password } = formValues;

	const handleChange = e => {
		const { value, name } = e.target;
		setFormvalues({ ...formValues, [name]: value });
	};

	const handleSubmit = async e => {
		e.preventDefault();
		try {
			await signInWithEmailAndPassword(auth, email, password);
		} catch (e) {
			alert("Email and Password don't match!");
		}

		setFormvalues({
			email: "",
			password: "",
		});
	};

	return (
		<div className='sign-in-form'>
			<div className='sign-in-form-headings'>
				<h2 className='sign-in-form-title'>I already have an account!</h2>
				<span className='sign-in-form-subtitle'>
					sign in with your email and password
				</span>
			</div>
			<div className='col-md-6'>
				<form onSubmit={handleSubmit}>
					<div className='sign-in-form-con'>
						<label className='sign-in-form-label'>Username</label>
						<InputBox
							value={email}
							name='email'
							type='text'
							onChange={handleChange}
						/>
					</div>
					<div className='sign-in-form-con'>
						<label className='sign-in-form-label'>Password</label>
						<InputBox
							value={password}
							name='password'
							type='password'
							onChange={handleChange}
						/>
					</div>

					<div className='form-in-sign-btn'>
						<ButtonBox>LOGIN</ButtonBox>
						<GoogleBtn onClick={signInWithGoogle}>
							SIGN IN WITH GOOGLE
						</GoogleBtn>
					</div>
				</form>
			</div>
			<div className='sign-in-out-text'>
				<h1 className='sign-in-out-heading'>
					Dont have an account! &nbsp;
					<Link to='/signup' className='sign-in-out-sub-heading'>
						sign up
					</Link>
				</h1>
			</div>
		</div>
	);
};

export default SignInForm;
