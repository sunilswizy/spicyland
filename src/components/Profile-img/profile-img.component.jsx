import React, { useState } from "react";
import "./profile-img.styles.scss";
import ProfileToggle from "../profile-toggle/profile-toggle.component";

import { connect } from "react-redux";

const ProfileImg = ({ currentUser }) => {
	const [ishidden, setIsHidden] = useState(true);
	const { photoURL, displayName } = currentUser;
	return (
		<>
			{currentUser?.photoURL ? (
				<>
					<img
						src={photoURL}
						alt={displayName}
						className={`profile-img ${ishidden ? "" : "profile-img-active"}`}
						onClick={() => setIsHidden(!ishidden)}
					/>
				</>
			) : (
				<div
					className='profile-name-log disable-select'
					onClick={() => setIsHidden(!ishidden)}>
					<i className='far fa-user nameIcon'></i> {displayName}
				</div>
			)}
			{!ishidden && <ProfileToggle />}
		</>
	);
};

const mapStateToProps = state => ({
	currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(ProfileImg);
