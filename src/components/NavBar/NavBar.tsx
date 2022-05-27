import { useNavigate } from "react-router-dom"
import { useAuth } from "../../context"
import "./NavBar.css"

export const NavBar=()=>{
  const {token,logoutHandler}=useAuth();
  const navigate= useNavigate()
    return(
        <nav className="navbar flex-row">
        <a href="">
          <div className="nav-heading flex-row">
            <img src="https://res.cloudinary.com/doohtm4bs/image/upload/v1652503110/Quiz%20App/one8_hslvxb.png" 
            alt="one8 logo" className="nav-logo" />
            <small className="nav-heading-small">Quiz</small>
          </div>
        </a>

        <div className="saved-item-container flex-row">
          {token?<div className="saved-item flex-row"
          onClick={logoutHandler}
          ><i className="fas fa-sign-out-alt nav-icon"></i></div>:
          <div className="saved-item flex-row"
          onClick={()=>navigate("/login")}
          ><i className="fas fa-user-circle nav-icon"></i></div>}
        </div>
      </nav>
    )
}