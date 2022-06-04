import { NavBar } from "../../components"
import { categoryData } from "../../Data/category-model"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../context"
import "./LandingPage.css"

export const LandingPage=()=>{
  const {token}= useAuth();
  const navigate= useNavigate();
    return(
        <>
        <NavBar/>
        <main className="main-cont flex-col">
        <div className="quiz-home-container">
        <section className="left-section">
          <h1 className="left-subhead">Wanna test your knowledge about cricket?</h1>
          <h1 className="left-subhead">Let's have some fun!</h1>
          <a href="#explore"><button className="btn explore-btn">Explore Quiz</button></a>
        </section>
        <section className="right-section">
          <img src="https://res.cloudinary.com/doohtm4bs/image/upload/v1652510759/Quiz%20App/quiz-home_eh5wmt.png" className="landing-img" alt="" />
        </section>
        </div>
        <hr className="partition-line" />
        <section className="quiz-card-container" id="explore">
          {categoryData.map((item)=>{
            return(
              <div className="quiz-card flex-col">
               <img src={item.image} 
               className="card-image"
               />
              <h3 className="quiz-title">{item.category}</h3>
              <section className="paragraph-sm">
              Take this quiz to test yourself
              </section>
              <footer className="quiz-card-footer">
                <h4 className="play-tag"
                onClick={token?()=>navigate(`/${item.id}/rules`):()=>navigate("/login")}
                >Play now</h4>
              </footer>
            </div>
            )
          })}
        </section>
        </main>
        </>
    )
}