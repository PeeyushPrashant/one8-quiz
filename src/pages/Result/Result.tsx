import { useNavigate, useParams } from "react-router-dom"
import { quizData } from "../../Data/quiz-model"
import { NavBar } from "../../components"
import "./Result.css"
import { useData } from "../../context"


export const Result=()=>{
    const {categoryId}=useParams();
    const quiz= quizData.find((item)=>item.id===categoryId);
    const questions= quiz?.questions ;
    const {state}=useData();
    const navigate = useNavigate();
    const results= state.answer.map((item)=>({
        ...item,...quiz?.questions[Number(item.questionIndex)-1]
    }))

    const individualPoint= quiz?.questions[0].points as number;
    const totalQuestions= quiz?.questions.length as number;

    const totalPoints= results.reduce((acc,curr)=>{
        const options= curr.options || [];
        return options[curr.selectedOption]?.isRight?acc+individualPoint:acc
    },0)
  return (
      <>
      <NavBar/>
      <main className="main-cont flex-row">
          <div className="result-container flex-col">
              <h1 className="result-heading head-margin">Quiz Result</h1>
              <h2 className="head-margin">{totalPoints<=20?"Oops 😭,Better luck Next Time":
              "Congratulations ✌️, You have cleared the quiz"}!</h2>
              <h3 className="head-margin">Your Score is: {totalPoints}/{individualPoint*totalQuestions}</h3>
              <hr className="border-line"/>
             <section className="questions-list flex-col">
                 {results?.map((item,index)=>{
                     const options= item.options || [];
                     const isRight= options[item.selectedOption]?.isRight;
                     return(
                         <>
                         <div className="quiz-header flex-row">
                             <p className="quiz-count">Question : {Number(index)+1}</p>
                             <p>{isRight?<i className="fas fa-check-circle correct-icon"></i>:
                             isRight===false?<i className="fas fa-times-circle wrong-icon"></i>:
                             <span className="not-selected-info">Not Selected</span>}</p>
                         </div>
                         <h2 className="quiz-question">{item.question}</h2>
                         <section className="quiz-option-list flex-col">
                             {options.map((el,idx)=>{
                                 return(
                                     isRight?
                                    <div 
                                    className={`quiz-option ${item.selectedOption===idx?"bg-success":"bg-color"} flex-row`}
                                    >{el.value}</div>:
                                    <div
                                    className={`quiz-option ${item.selectedOption===idx?"bg-error":
                                    el.isRight?"bg-success":"bg-color"} flex-row`}
                                    >
                                    {el.value}
                                    </div>
                                 )
                             })}
                         </section>
                         <hr className="border-line"/>
                        </>
                     )
                 })}
             </section>
                <button className="btn home-btn"
                onClick={()=>navigate("/",{replace:true})}
                >GO TO HOME</button>
          </div>
      </main>
      </>
  )
}