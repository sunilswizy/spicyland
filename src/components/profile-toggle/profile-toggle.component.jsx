import React from "react";
import "./profile-toggle.styles.scss";

import GoogleBtn from "../Google-btn/google-btn.component";

import { auth } from "../../pages/firebase/firebase.config";
import { signOut } from "firebase/auth";

const ProfileToggle = ({ noImage, currentUser }) => {
	const { displayName, email, photoURL } = currentUser;

	return (
		<div className='profile-toggle'>
			<div className='profile-toggle-img-con'>
				{!noImage && (
					<img
						src={photoURL}
						alt={displayName}
						className='profile-toggle-img'
					/>
				)}
			</div>
			<div className='progile-toggle-heading'>
				<h2 className='progile-toggle-name'>{displayName}</h2>
				<span className='profile-toggle-email'>{email}</span>
			</div>
			{noImage ? (
				<GoogleBtn noImage onClick={async () => await signOut(auth)}>
					Signout
				</GoogleBtn>
			) : (
				<GoogleBtn onClick={async () => await signOut(auth)}>Signout</GoogleBtn>
			)}
		</div>
	);
};

export default ProfileToggle;
