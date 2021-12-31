import React from "react";
import GoogleLogin from 'react-google-login'
import { GoogleLogout } from "react-google-login";


const SignInOut = ({handleResponse, handleLogout}) => {

    return (
        <div>
            <h1>Sign in out</h1>
            <GoogleLogin
                clientId="36246418967-2ksvmgvue652lkrnvnuaaik3q40n0afe.apps.googleusercontent.com"
                buttonText="Google"
                onSuccess={handleResponse}
                onFailure={handleResponse}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}>
                <span>
                    Button
                </span>
            </GoogleLogin>

            <GoogleLogout
                clientId="36246418967-2ksvmgvue652lkrnvnuaaik3q40n0afe.apps.googleusercontent.com"
                buttonText="Logout"
                onLogoutSuccess={handleLogout}>
            </GoogleLogout>
        </div>
    )
}

export default SignInOut