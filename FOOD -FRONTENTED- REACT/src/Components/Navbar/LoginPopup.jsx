import React, { useState } from 'react'
import'./LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowlogin}) => {

    const[currentState,setCurrentstate] = useState("Sign Up")
  return (
    <div className='login-popup'>
       <form action="" className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currentState}</h2>
            <img onClick={()=>setShowlogin(false)}src={assets.cross_icon}/>
        </div>
        <div className="login-popup-input">
            {currentState==='Login'?<></>:
            <input type='text' palceholder='your name' required/>}
            <input type='email' placeholder='Your email' required/>
            <input type='password' placeholder='password' required/>
        </div>
        <buuton>{currentState==='Sign Up'?"Create Account":"Login"}</buuton>
        <div className='login-popoup-condition'>
            <input type='checkbox' required/>
            <p>By Contuining , i agree to terms of use &b privacy policy</p>

        </div>
        {currentState==='Login'?<p>Create a new account?<span on onClick={()=> setCurrentstate("Sign Up")}>Click here</span></p>
        : <p>Already have an account?<span onClick={() =>setCurrentstate("Login")} >Login here</span></p>}
        
        
       </form>
       
        </div>
  )
}

export default LoginPopup