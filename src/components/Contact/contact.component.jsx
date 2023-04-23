import React, { useState } from "react";
import "./contact.styles.scss";

import InputBox from "../Input-box/input-box.component";
import ButtonBox from "../Button-box/button-box.component";
import { sendAQuery } from "../../pages/firebase/firebase.config";

const Contact = ({ home }) => {
	const [contact, setContact] = useState({
		userName: "",
		email: "",
		message: "",
	});

	const { userName, email, message } = contact;

	const handleChange = e => {
		const { value, name } = e.target;

		setContact({
			...contact,
			[name]: value,
		});
	};

	const handleSubmit = e => {
		e.preventDefault();
		alert("response submitted");

		sendAQuery(contact);

		setContact({
			userName: "",
			email: "",
			message: "",
		});
	};

	return (
		<div className='contact' style={{ minHeight: home ? "100vh" : "88vh" }}>
			<h1
				className='contact-title'
				data-aos='fade-right'
				data-aos-offset='250'
				data-aos-duration='600'>
				Contact Us
			</h1>

			<div className='row'>
				<div
					className='col-md-6 contact-con'
					data-aos='fade-right'
					data-aos-offset='250'
					data-aos-duration='600'>
					<form onSubmit={handleSubmit} autoComplete='off'>
						<div className='contact-form-con'>
							<InputBox
								type='text'
								name='userName'
								placeholder='Username'
								value={userName}
								onChange={handleChange}
								bigBox
								required
							/>
						</div>
						<div className='contact-form-con'>
							<InputBox
								type='text'
								name='email'
								placeholder='Email'
								value={email}
								onChange={handleChange}
								bigBox
								required
							/>
						</div>
						<div className='contact-form-con'>
							<textarea
								type='text'
								name='message'
								placeholder='Subject'
								className='contact-form-textarea'
								value={message}
								onChange={handleChange}
								maxLength='500'
								required
							/>
						</div>
						<div className='contact-btn'>
							<ButtonBox>Send</ButtonBox>
						</div>
					</form>
				</div>

				<div
					className='col-md-6'
					data-aos='fade-left'
					data-aos-offset='250'
					data-aos-duration='600'>
					<div className='container row contact-con'>
						<div className='col-md-1' />
						<div className='col-md-1 contact-icon'>
							<i className='far fa-address-card'></i>
						</div>

						<div className='col-md-8 contact-content'>
							<h1 className='contact-title'>24/7 Support</h1>
							<span className='contact-subtitle'>
								{" "}
								Customer support 24hours!
							</span>
						</div>
					</div>

					<div className='container row contact-con'>
						<div className='col-md-1' />
						<div className='col-md-1 contact-icon'>
							<i className='fas fa-phone-alt'></i>
						</div>

						<div className='col-md-8 contact-content'>
							<h1 className='contact-title'>Call Order Now!</h1>
							<span className='contact-subtitle'> +91-533-3144-233</span>
						</div>
					</div>

					<div className='container row contact-con'>
						<div className='col-md-1' />
						<div className='col-md-1 contact-icon'>
							<i className='far fa-clock'></i>
						</div>

						<div className='col-md-8 contact-content'>
							<h1 className='contact-title'>Sales Hour!</h1>
							<span className='contact-subtitle'> 09.00 - 21.00</span>
						</div>
					</div>

					<div className='container row contact-con'>
						<div className='col-md-1' />
						<div className='col-md-1 contact-icon'>
							<i className='far fa-envelope'></i>
						</div>

						<div className='col-md-8 contact-content'>
							<h1 className='contact-title'>Mailing Address!</h1>
							<span className='contact-subtitle'> spicyland1912@gamil.com</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
