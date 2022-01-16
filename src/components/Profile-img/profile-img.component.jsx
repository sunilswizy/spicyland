import React, { useState } from "react";
import "./profile-img.styles.scss";
import ProfileToggle from "../profile-toggle/profile-toggle.component";

import { auth } from "../pages/firebase/firebase.config";

const ProfileImg = ({ currentUser }) => {
	const [ishidden, setIsHidden] = useState(true);
	const { photoURL, displayName } = currentUser;
	return (
		<>
			{auth.currentUser?.photoURL ? (
				<>
					<img
						src={photoURL}
						alt={displayName}
						className={`profile-img ${ishidden ? "" : "profile-img-active"}`}
						onClick={() => setIsHidden(!ishidden)}
					/>
					{!ishidden && <ProfileToggle currentUser={currentUser} />}
				</>
			) : (
				<>
					<i
						className='far fa-user nameIcon disable-select'
						onClick={() => setIsHidden(!ishidden)}>
						&nbsp;{displayName}
					</i>
					{!ishidden && <ProfileToggle noImage currentUser={currentUser} />}
				</>
			)}
		</>
	);
};

export default ProfileImg;
