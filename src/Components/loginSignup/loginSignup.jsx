import React, {useState} from 'react'
import './loginSignup.css'
import user_icon from '../Assets/password.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

const LoginSignUp = () => {
    
    const [action, setAction] = useState('Login');

    return (
        <div className='container'>
            <dib className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </dib>
            <div className="inputs">
                {
                    action === "Login" 
                    ? <div></div> 
                    :   <div className="input">
                        <img src={user_icon} alt="" />
                        <input type="text" placeholder='name' />
                        </div>
                }
                <div className="input">
                    <img src={email_icon} alt="" />
                    <input type="email" placeholder='email' />
                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder='password' />
                </div>
            </div>

            {
                action === 'Sign Up' 
                ?   <div></div>
                :   <div className="forgot-password">Lost password? <span>Click here!</span></div>
            }
            
            <div className="submit-container">
                <div className={action === "Login" ? "submint gray" : "submit"} onClick={() => {setAction("Sign Up")}}>Sign Up</div>
                <div className={action === 'Sign Up' ? "submin gray" : "submit"} onClick={() => {setAction("Login")}}>Login</div>
            </div>

        </div>
    )
}

export default LoginSignUp