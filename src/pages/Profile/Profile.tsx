import { NavBar } from "../../components"
import { useAuth } from "../../context"
import "./Profile.css"

export const Profile=()=>{
    const {user,logoutHandler}= useAuth();
    return (
        <>
        <NavBar/>
        <main className="main-cont flex-row">
        <div className="profile-card flex-col">
               <header className="flex-row">
                   <div className="header-tab">Profile</div>
               </header>
                <h3 className="profile-card-headings">Profile Details</h3>
               <section className="user-details flex-col">
                   <div className="user-data flex-row">
                       <h4 className="profile-card-headings">Name:</h4>
                       <p>{user.name}</p>
                   </div>
                   <div className=" user-data flex-row">
                       <h4 className="profile-card-headings">Email:</h4>
                       <p>{user.email}</p>
                   </div>
               </section>
               <h3 className="profile-card-headings">Account Settings</h3>
               <footer>
                   <button className="btn logout-btn"
                   onClick={logoutHandler}
                   >Log Out</button>
               </footer>
            </div>
        </main>
        </>
    )
}