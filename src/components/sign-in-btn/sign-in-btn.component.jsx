import React from 'react'
import './sign-in-btn.styles.scss'

import GoogleLogin from 'react-google-login'

const SignInBtn = ({handleResponse, children}) => (

    <GoogleLogin
    clientId="36246418967-2ksvmgvue652lkrnvnuaaik3q40n0afe.apps.googleusercontent.com"
    onSuccess={handleResponse}
    onFailure={handleResponse}
    cookiePolicy={'single_host_origin'}
    isSignedIn={true}
    icon={false}
    className="sign-in-btn"
    >
    {children}
</GoogleLogin>
)

export default SignInBtn
