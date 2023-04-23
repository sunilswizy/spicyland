import React, { useState } from "react";
import "./profile-img.styles.scss";
import ProfileToggle from "../profile-toggle/profile-toggle.component";

import { connect } from "react-redux";
import { selectCurrentUser } from "../../redux/user/selector";
import { createStructuredSelector } from "reselect";

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
						referrerPolicy='no-referrer'
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

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(ProfileImg);
