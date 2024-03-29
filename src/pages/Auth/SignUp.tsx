import { NavBar } from "../../components"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../context"
import "./Auth.css"
import { useState } from "react"
export const SignUp=()=>{
  const {signupHandler}= useAuth();
  const [signup,setSignup]= useState({
    name:'',
    email:'',
    password:''
  })
    const navigate=useNavigate();
    const handleSubmit=(e:any)=>{
        e.preventDefault();
        signupHandler(signup.name,signup.email,signup.password);
    }

    return (
        <>
      <NavBar/>
     
      <div className="auth-container flex-row">
          <form className="auth-card flex-col" onSubmit={handleSubmit}>
            <h1 className="auth-heading">Sign Up</h1>
            <p className="form-description">
              Fill below form to sign up and enjoy special offers in one8 store
            </p>
            <div className="auth-input flex-row">
              <label htmlFor="username" className="input-label"
                ><strong>Name</strong></label
              >
              <input
                type="text"
                id="username"
                className="input-feild"
                value={signup.name}
                placeholder="Enter your first name"
                onChange={(e)=>setSignup({...signup,name:e.target.value})}
                required
              />
            </div>
            
            <div className="auth-input flex-row">
              <label htmlFor="email" className="input-label"><strong>Email</strong></label>
              <input
                type="email"
                id="email"
                className="input-feild"
                value={signup.email}
                placeholder="one8@gmail.com"
                onChange={(e)=>setSignup({...signup,email:e.target.value})}
                required
              />
            </div>
            <div className="auth-input flex-row">
              <label htmlFor="password" className="input-label"
                ><strong>Password</strong></label
              >
              <input
                type="password"
                id="password"
                className="input-feild"
                value={signup.password}
                placeholder="Enter your new password"
                onChange={(e)=>setSignup({...signup,password:e.target.value})}
                required
              />
            </div>
            <button className="btn-secondary auth-btn login-btn"
            >Register</button>
            <div className="auth-footer flex-row"
            onClick={()=>navigate("/login")}
            >
              Already have an account<i
                  className="fas fa-angle-right icon-md"
                ></i
              >
            </div>
          </form>
        </div>
     
      
        </>
    )
}