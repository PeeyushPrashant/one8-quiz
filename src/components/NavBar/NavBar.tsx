import "./NavBar.css"

export const NavBar=()=>{
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
           <button className="btn btn-primary btn-login">Login</button>
        </div>
      </nav>
    )
}