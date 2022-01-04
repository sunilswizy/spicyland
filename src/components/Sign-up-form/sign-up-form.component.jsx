import React, { useState } from "react";
import './sign-up-form.styles.scss'

import InputBox from "../Input-box/input-box.component";
import ButtonBox from "../Button-box/button-box.component";

const SignUpForm = () => {
    const [formValues, setFormvalues] = useState({
        userName: '',
        email:'',
        password: '',
        confirmPassword: ''
    })

    const {userName, password, email, confirmPassword } = formValues

    const handleSubmit = e => {
            e.preventDefault()
    }

    const handleChange = e => {
            const {value, name} = e.target
            setFormvalues({...formValues, [name]: value})
    }

    return (
        <div className="sign-up-form">
        <div>
             <h2 className="sign-up-form-title">I dont have an account</h2>
              <span className="sign-up-form-subtitle">create account with email and password</span>
        </div>

              <form onSubmit={handleSubmit}> 
              <div className="sign-up-form-con">
                 <InputBox 
                    value={userName}
                    name="userName"
                    type="text"
                    onChange={handleChange}
                    bigBoxup
                 > 
                 Username
                 </InputBox> 
                </div>
                <div className="sign-up-form-con">
                 <InputBox 
                    value={email}
                    name="email"
                    type="email"
                    onChange={handleChange}
                    bigBoxup
                    > 
                email </InputBox> 
                 </div>
                <div className="sign-up-form-con">
                 <InputBox 
                    value={password}
                    name="password"
                    type="password"
                    onChange={handleChange}
                    bigBoxup
                    > 
                password </InputBox> 
                 </div>
                 <div className="sign-up-form-con">
                 <InputBox 
                    value={confirmPassword}
                    name="confirmPassword"
                    type="password"
                    onChange={handleChange}
                    bigBoxup
                    > 
                confirm password </InputBox> 
                 </div>
                <div className="form-up-sign-btn">
                    <ButtonBox>Login</ButtonBox>
                </div>
              </form>
        </div>
    )
}

export default SignUpForm