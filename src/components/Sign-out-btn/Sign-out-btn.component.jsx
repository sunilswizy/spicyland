import React from "react";
import './sign-out-btn.styles.scss'
import { GoogleLogout } from "react-google-login";

const SignOutBtn = ({handleLogout}) => {
    return (
    <GoogleLogout
        clientId="36246418967-2ksvmgvue652lkrnvnuaaik3q40n0afe.apps.googleusercontent.com"
        onLogoutSuccess={handleLogout}
        className="google-logout-btn"
        icon={false}
        theme="dark"
        >
            Log Out
    </GoogleLogout>
    )
}

export default SignOutBtn