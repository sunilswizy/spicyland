import React, { useState } from "react";
import './sign-in-out.styles.scss'

import SignInForm from "../Sign-in-form/sign-in-form.component";
import SignUpForm from "../Sign-up-form/sign-up-form.component";

const SignInOut = ({handleResponse}) => {

    const [hidden, setHidden] = useState(true)

    return (
        <div className="sign-in-out">
        {
            hidden ? 
             <SignInForm handleResponse={handleResponse}/>
            :<SignUpForm />
        }
        {/* <h1>Dont have an account! <span onClick={() => setHidden(false)}>sign up</span></h1> */}
        </div>
    )
}

export default SignInOut