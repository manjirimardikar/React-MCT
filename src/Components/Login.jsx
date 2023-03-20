
import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'


export const Login = (props) => {
    const navigate= useNavigate()
    const gotohomepage =()=>{
        if(props.email !=="" && props.password !=="" && props.checkinput !== false){
            if(props.email ==="Manjari" && props.password ==="2828" && props.checkinput === true){
                localStorage.setItem('login',true)
                navigate('/home')  
                props.setEmail("")
                props.setPassword("")
                props.setCheckinput(false)
            }
            else{
                alert(" enter valid details")
            }
           
        }
        else{
            alert(" enter valid details")
        }
       
    }

  

   
  return (
    <div className='login_form'>
        <div className="login-container">
            <div className="login-heading">
                <h1>Welcome back to Pretty Login </h1>
                <p>It's great to have you back!</p>
            </div>
            <div className="login-input-container">
                <label> Email</label>
                <input type="text" value={props.email} onChange={(e)=>{
                    props.setEmail(e.currentTarget.value)
                    console.log(props.email)
 
                }}/>
                <label> Password</label>
                <input type="password"  value={props.password} onChange={(e)=>{
                    props.setPassword(e.target.value)
                    console.log(props.password)

 
                }} />
            </div>
            <div className="remember-container">
                <div className="checkbox">
                <input  checked={props.checkinput}type="checkbox"  onChange={(e)=>{
                    props.setCheckinput(e.target.checked)
                }}/>
                <label>Remember me</label>
                </div>
               
                <p>forgot password?</p>

            </div>

            <div className="login-buttons">
                <button className='btn-pink' onClick={()=>{gotohomepage()}}>Login</button>
                <button className='btn-white'>Create Account</button>

            </div>
            <div className="others-logins">
                <p> or login with</p>
                <h4>Facebook  Google</h4>
            </div>

        </div>
        <div className="image-container">
            <img src="https://www.northlandscapes.com/files/images/portfolio-2019/northlandscapes-norway-black-woods-03.jpg" alt="" />

        </div>
    </div>
  )
}