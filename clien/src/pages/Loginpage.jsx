import React from "react";
import "../css/LoginPage.css";
import log from "../images/draw2.webp";
import { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";

import {message} from "antd"
import axios from "axios"
import {useNavigate} from "react-router-dom"

const LoginPage = () => {
const[admin, setAdmin]=useState("") 
const[password, setPassword]=useState("")
const[userType , setUsertype]=useState("")
//console.log(admin, password, empType)

const navigate=useNavigate()

const handleSubmit=async()=>{

if(userType=="admin")
{
  try {
    let api="http://localhost:8080/admin/adminlogin";
    const response= await axios.post(api , {admin:admin, password:password})
    console.log(response.data)

    if(response.status==200)
    {
      message.success("Login SuccesFully!!!")
 
    }
    navigate("/dashboard")
  } catch (error) {
    message.error(error.response.data.msg)
  }
}


}


return (
    <div className="login-wrapper">
      <div className="login-left">
        <img src={log} alt="Illustration"className="illustration"/>
      </div>
      <div className="login-right">
        <div className="form-container">
        
          <h2 style={{color:"white"}}> Sign in with  <FaFacebook/> <AiFillTwitterCircle/> <FaLinkedin/></h2>
         
          <div className="separator">
            <span style={{borderRadius:"120%"}}>Or</span>
          </div>
        
            <div className="input-group">
              <input type="email" placeholder="Email address" required  name="admin" value={admin} onChange={(e)=>{setAdmin(e.target.value)}} />
            </div>
            <div className="input-group">
              <input type="password" placeholder="Password" required  name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
            </div>
             <div className="input-group">
              <select  required name="empType" value={userType} onChange={(e)=>{setUsertype(e.target.value)}}>
                <option value="" disabled> Login as </option>
                <option value="admin">Admin</option>
                <option value="employee">Employee</option>
                
              </select>
            </div>

            <div className="form-options">
             <input type="checkbox"/> Remember me
              <a href="/forgot-password" className="forgot-password">Forgot password? </a>
            </div>
            <button  className="login-btn" onClick={handleSubmit}> LOGIN  </button>
         <div className="register">
            Don't have an account? <a href="/register">Register</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
