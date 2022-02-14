import React from "react";
import "./profile-toggle.styles.scss";

import GoogleBtn from "../Google-btn/google-btn.component";

import { auth } from "../../pages/firebase/firebase.config";
import { signOut } from "firebase/auth";

import { connect } from "react-redux";
import { selectCurrentUser } from "../../redux/user/selector";
import { createStructuredSelector } from "reselect";

const ProfileToggle = ({ noImage, currentUser }) => {
	const { displayName, email, photoURL } = currentUser;

	return (
		<div className='profile-toggle'>
			<div className='profile-toggle-img-con'>
				{currentUser?.photoURL && (
					<img
						src={photoURL}
						alt={displayName}
						className='profile-toggle-img'
						referrerPolicy='no-referrer'
					/>
				)}
			</div>
			<div className='progile-toggle-heading'>
				<h2 className='progile-toggle-name'>{displayName}</h2>
				<span className='profile-toggle-email'>{email}</span>
			</div>
			{currentUser?.photoURL ? (
				<GoogleBtn onClick={async () => await signOut(auth)}>Signout</GoogleBtn>
			) : (
				<GoogleBtn notGoogleLog onClick={async () => await signOut(auth)}>
					Signout
				</GoogleBtn>
			)}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(ProfileToggle);
