import { NavBar } from "../../components"
import "./Rules.css"

export const Rules=()=>{
    return(
        <>
        <NavBar/>
           <main className="main-cont flex-row">
           <div className="rules-card flex-col">
            <h2 className="rules-head">Rules</h2>
            <div className="rules-list flex-col">
            <section className="rules flex-row">
            <i className="fas fa-star"></i>
            <p>There are a total of 5 questions</p>
            </section>
            <section className="rules flex-row">
            <i className="fas fa-star"></i>
            <p>Each right answer scores 10 Points.</p>
            </section>
            <section className="rules flex-row">
            <i className="fas fa-star"></i>
            <p>To win the quiz you need to score more than 70%.</p>
            </section>
            <section className="rules flex-row">
            <i className="fas fa-star"></i>
            <p>You can exit the quiz anytime</p>
            </section>
            <section className="rules flex-row">
            <i className="fas fa-star"></i>
            <p>You will get 30 seconds to select an option for each question.</p>
            </section>
            </div>
            <button className="btn start-btn">Start Quiz</button>
           </div>
        </main>
        </>
        
    )
}