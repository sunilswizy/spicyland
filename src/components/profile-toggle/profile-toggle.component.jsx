import React from "react";
import './profile-toggle.styles.scss'

import SignOutBtn from "../Sign-out-btn/Sign-out-btn.component";

const ProfileToggle = ({handleLogout, profile : {imageUrl, name, email}}) => {
    return (
        <div className="profile-toggle">
            <div>
                <img src={imageUrl} alt={name} className="profile-toggle-img" />
            </div>
            <div className="progile-toggle-heading">
               <h2>{name}</h2>
                <span className="profile-toggle-email">{email}</span>
            </div>
            <SignOutBtn handleLogout={handleLogout}/>
        </div>
    )
}

export default ProfileToggle