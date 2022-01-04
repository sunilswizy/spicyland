import React, { useState } from "react";
import './profile-img.styles.scss'
import ProfileToggle from "../profile-toggle/profile-toggle.component";

const ProfileImg = ({profile,handleLogout}) => {
    const [ishidden, setIsHidden] = useState(true)
    console.log(profile.imageUrl)
    return (
        <>
            <img src={profile.imageUrl} 
                alt={profile.name} 
                className={`profile-img ${ishidden ?  '' : "profile-img-active"}`} 
                onClick={() => setIsHidden(!ishidden)}
                />
                {
                    !ishidden && <ProfileToggle profile={profile} handleLogout={handleLogout}/>
                }
        </>
    )
}

export default ProfileImg