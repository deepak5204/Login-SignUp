import React from 'react'
import './loginSignup.css'
import user_icon from '../Assets/password.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

const LoginSignUp = () => {
    return (
        <div className='container'>
            <dib className="header">
                <div className="text">Sign Up</div>
                <div className="underline"></div>
            </dib>
            <div className="inputs">
                <div className="input">
                    <img src={user_icon} alt="" />
                    <input type="text" placeholder='name' />
                </div>
                <div className="input">
                    <img src={email_icon} alt="" />
                    <input type="email" placeholder='email' />
                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder='password' />
                </div>
            </div>

            <div className="forgot-password">Lost password? <span>Click here!</span></div>

            <div className="submit-container">
                <div className="submit">Sign Up</div>
                <div className="submit">Login</div>
            </div>

            <b>hello from longin signup page</b>
        </div>
    )
}

export default LoginSignUp