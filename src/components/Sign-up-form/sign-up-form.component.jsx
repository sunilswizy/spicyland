import React, { useState } from "react";
import "./sign-up-form.styles.scss";

import InputBox from "../Input-box/input-box.component";
import ButtonBox from "../Button-box/button-box.component";
import GoogleBtn from "../Google-btn/google-btn.component";

import {
	auth,
	createUserProfileDocument,
} from "../../pages/firebase/firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";

const SignUpForm = () => {
	const [formValues, setFormvalues] = useState({
		displayName: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	const { displayName, password, email, confirmPassword } = formValues;

	const handleChange = e => {
		const { value, name } = e.target;
		setFormvalues({ ...formValues, [name]: value });
	};

	const handleSubmit = async e => {
		e.preventDefault();

		if (password !== confirmPassword) {
			alert("Password and Confirm password don't Match!");
			return;
		}

		try {
			createUserWithEmailAndPassword(auth, email, password).then(userAuth =>
				createUserProfileDocument(userAuth.user, { displayName })
			);
		} catch (e) {
			alert("The Account is already created!");
		}

		setFormvalues({
			displayName: "",
			email: "",
			password: "",
			confirmPassword: "",
		});
	};

	return (
		<div className='sign-up-form'>
			<div className='sign-up-form-heading'>
				<h2 className='sign-up-form-title'>I dont have an account !</h2>
				<span className='sign-up-form-subtitle'>
					create account with email and password
				</span>
			</div>
			<div className='col-md-6'>
				<form onSubmit={handleSubmit} autoComplete='off'>
					<div className='sign-up-form-con'>
						<label className='sign-up-form-label'>Username</label>
						<InputBox
							value={displayName}
							name='displayName'
							type='text'
							onChange={handleChange}
							required
						/>
					</div>
					<div className='sign-up-form-con'>
						<label className='sign-up-form-label'>Email</label>
						<InputBox
							value={email}
							name='email'
							type='email'
							onChange={handleChange}
							required
						/>
					</div>
					<div className='sign-up-form-con'>
						<label className='sign-up-form-label'>Password</label>
						<InputBox
							value={password}
							name='password'
							type='password'
							onChange={handleChange}
							required
						/>
					</div>
					<div className='sign-up-form-con'>
						<label className='sign-up-form-label'>Confirm Password</label>
						<InputBox
							value={confirmPassword}
							name='confirmPassword'
							type='password'
							onChange={handleChange}
							required
						/>
					</div>
					<div className='form-up-sign-btn'>
						<ButtonBox>SIGNUP</ButtonBox>
						<GoogleBtn>Sign IN WITH GOOGLE</GoogleBtn>
					</div>
				</form>
			</div>
			<div className='sign-in-out-text'>
				<h1 className='sign-in-out-heading'>
					Aready have an account! &nbsp;
					<Link to='/signin' className='sign-in-out-sub-heading'>
						sign in
					</Link>
				</h1>
			</div>
		</div>
	);
};

export default SignUpForm;
