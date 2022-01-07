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
        {
            hidden ?
            <div className="sign-in-out-text">
                <h1 className="sign-in-out-heading">Dont have an account! <span className="sign-in-out-sub-heading" onClick={() => setHidden(false)}>sign up</span></h1>
            </div>
            :
            <div className="sign-in-out-text">
                <h1 className="sign-in-out-heading">Aready have an account! <span className="sign-in-out-sub-heading" onClick={() => setHidden(true)}>sign in</span></h1>
            </div>
        }
    </div>
    )
}

export default SignInOut