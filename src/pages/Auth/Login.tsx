import { NavBar } from "../../components"
import { useNavigate } from "react-router-dom"
import "./Auth.css"
import { useState } from "react";
import { useAuth } from "../../context";

export const Login=()=>{
    const navigate= useNavigate();
    const {loginHandler}= useAuth();
    const [login,setLogin]= useState({
      email:'',
      password:''
    })
    const testLogin=()=>{
      setLogin({...login,email:"prashant123@gmail.com",password:"prashant@123"})
    }
    return (
        <>
        <NavBar/>
        <main className="main-cont flex-col">
        <div className="auth-container flex-row">
          <div className="auth-card flex-col">
            <h1 className="auth-heading">Login</h1>
            <p>Please enter your valid email and password.</p>
            <div className="auth-input flex-row">
              <label  className="input-label"><strong>Email</strong></label>
              <input
                type="email"
                className="input-feild"
                value={login.email}
                placeholder="Enter your email here"
                onChange={(e)=>setLogin({...login,email:e.target.value})}
                required
              />
            </div>
            <div className="auth-input flex-row">
              <label  className="input-label"
                ><strong>Password</strong></label
              >
              <input
                type="password"
                className="input-feild"
                value={login.password}
                placeholder="Enter your password"
                onChange={(e)=>setLogin({...login,password:e.target.value})}
                required
              />
            </div>
            <button className="btn-secondary auth-btn login-btn" 
            onClick={()=>loginHandler(login.email,login.password)}
            >Login</button>
            <button className="btn-icon auth-btn"
            onClick={testLogin}
            >Login with test credentials</button>
            <div className="auth-footer flex-row"
            onClick={()=>navigate("/signup")}
            >
              Create new account<i className="fas fa-angle-right icon-md"></i
              >
            </div>
          </div>
        </div>
        </main>
        
        </>
    )
}