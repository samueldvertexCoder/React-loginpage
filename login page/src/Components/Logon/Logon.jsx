import React, { useState } from 'react'

import '../Logon/Logon.css'

import Avatar from '../Asset/avatar.png'
import email from '../Asset/email.png'
import password from '../Asset/password.png'


export const Logon = () => {

  const[action, setAction] = useState("Sign up");


  return (
    <div className='container'>
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>
          <div className="inputs">
            {action==="Login"?<div></div>:<div className="input">
              <img src={Avatar} alt=""/>
              <input type="text" placeholder='Name'/>
            </div>}
            
            <div className="input">
              <img src={email} alt=""/>
              <input type="email" placeholder='Email Id'/>
            </div>
            <div className="input">
              <img src={password} alt=""/>
              <input type="password" placeholder='Password'/>
            </div>
          </div>
          {action==="Sign Up"?<div></div>:<div className="forgot-password">Lost Password?<span>Click Here!</span></div>}
          
          <div className="submit-container">
            <div className={action==="Login"?"submit gray":"submit"}onClick={()=> {setAction("Sign Up")}}>Sign Up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"}onClick={()=>{setAction("Login")}}>Login</div>
          </div>
    </div>
  )
}

