import React, { useState } from "react";
import './sign-in-form.styles.scss'

import InputBox from "../Input-box/input-box.component";
import ButtonBox from "../Button-box/button-box.component";
import GoogleBtn from "../Google-btn/google-btn.component";

import { auth } from "../pages/firebase/firebase.config";
import { GoogleAuthProvider, signInWithPopup  } from 'firebase/auth'

const SignInForm = ({handleResponse}) => {
    const [formValues, setFormvalues] = useState({
        userName: '',
        password: ''
    })

    const {userName, password } = formValues

    const handleSubmit = e => {
            e.preventDefault()
    }

    const handleChange = e => {
            const {value, name} = e.target
            setFormvalues({...formValues, [name]: value})
    }

    const provider = new GoogleAuthProvider()

    const signInWithGoogle = async () => {
        const response  = await signInWithPopup(auth, provider)
        handleResponse(response.user)
    }

    return (
        <div className="container sign-in-form">
            <div className="sign-in-form-headings">
                <h2 className="sign-in-form-title">I already have an account!</h2>
                <span className="sign-in-form-subtitle">sign in with your username and password</span>
            </div>
        <div className="col-md-6">

            <form onSubmit={handleSubmit}> 
              <div className="sign-in-form-con">
                 <InputBox 
                    value={userName}
                    name="userName"
                    type="text"
                    onChange={handleChange}
                 > 
                 Username
                 </InputBox> 
                </div>
                <div className="sign-in-form-con">
                 <InputBox 
                    value={password}
                    name="password"
                    type="password"
                    onChange={handleChange}
                    > 
                password </InputBox> 
                 </div>
                 
                <div className="form-in-sign-btn">
                    <ButtonBox >Login</ButtonBox>
                    <GoogleBtn onClick={signInWithGoogle}>Sign in with Google</GoogleBtn>
                </div>
              </form>
        </div>
        </div>
    )
}

export default SignInForm