import React from "react";
import './profile-toggle.styles.scss'

import GoogleBtn from "../Google-btn/google-btn.component";

const ProfileToggle = ({handleLogout, profile : {photoURL, displayName, email}}) => {
    return (
        <div className="profile-toggle">
            <div>
                <img src={photoURL} alt={displayName} className="profile-toggle-img" />
            </div>
            <div className="progile-toggle-heading">
               <h2 className="progile-toggle-name">{displayName}</h2>
                <span className="profile-toggle-email">{email}</span>
            </div>
            <GoogleBtn onClick={handleLogout}>Signout</GoogleBtn>
        </div>
    )
}

export default ProfileToggle