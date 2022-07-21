import { useNavigate } from "react-router-dom"
import { useAuth,useTheme } from "../../context"
import "./NavBar.css"

export const NavBar=()=>{
  const {token}=useAuth();
  const {theme,changeTheme} = useTheme();
  const navigate= useNavigate();
    return(
        <nav className="navbar flex-row">
        <div className="nav-heading flex-row"
          onClick={()=>navigate("/")}
          >
            <img src="https://res.cloudinary.com/doohtm4bs/image/upload/v1652503110/Quiz%20App/one8_hslvxb.png" 
            alt="one8 logo" className="nav-logo" />
            <small className="nav-heading-small">Quiz</small>
          </div>
      

        <div className="saved-item-container flex-row">
         <div className="saved-item flex-row"
         onClick={changeTheme}
         >
          {theme==="dark"?<i className="bi bi-brightness-high nav-icon"></i>:
          <i className="bi bi-moon-fill nav-icon"></i>}
          </div>
          {token?<div className="saved-item flex-row"
          onClick={()=>navigate("/profile")}
          ><i className="fas fa-user-circle nav-icon"></i></div>:
          <div className="saved-item flex-row"
          onClick={()=>navigate("/login")}
          ><i className="fas fa-sign-in-alt nav-icon"></i></div>}
        </div>
      </nav>
    )
}