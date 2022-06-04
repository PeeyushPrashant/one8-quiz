import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { NavBar } from "../../components"
import { quizData } from "../../Data/quiz-model"
import { useData } from "../../context"
import { Dispatch } from "../../types"
import "./Question.css"

type QuizType={
    question:string,
    points?:Number,
    options:OptionType[]
}

type OptionType={
    value:string,
    isRight:boolean
}
export const Question=()=>{
    const navigate=useNavigate();
    const {state,dispatch}=useData();
    const [activeButton,setActiveButton]=useState(-1);
    const [timer,setTimer]= useState(40);
    const {categoryId,questionIndex}=useParams();
    const quiz= quizData.find((el)=>el.id===categoryId);
    const questions= quiz?.questions ;
    let question:QuizType={
        question:'',options:[]
    }
    if(questions){
        question=questions[Number(questionIndex)-1] ;
    }

    useEffect(()=>{
        let timerId=setInterval(()=>{
            if(timer>1)
             setTimer((timer)=>timer-1)
            else
             dispatchQuizAnswer(activeButton,Number(questionIndex),dispatch,questions)
        },1000)

        return ()=>clearInterval(timerId)
    },[timer])

    useEffect(()=>{
      if(state.answer.length===0 && Number(questionIndex)!==1){
          const recoveredData=JSON.parse(sessionStorage.getItem("answerdata") || '[]');
          if(recoveredData.length===0){
              navigate(`/${categoryId}/rules` ,{replace:true})
          }
          dispatch({type:"RECOVER_DATA",payload:{sessionData:recoveredData}})
      }
    },[])

    const dispatchQuizAnswer=(activeButton:number,questionIndex:number,
        dispatch:Dispatch, questions:QuizType[] | undefined
        )=>{
            dispatch({type:"ADD_QUESTION_DATA",
        payload:{questionIndex:questionIndex,selectedOption:activeButton}})

        sessionStorage.setItem("answerdata", 
        JSON.stringify([...JSON.parse(sessionStorage.getItem("answerdata") || '[]'),
        {questionIndex:questionIndex,selectedOption:activeButton}    
    ]))
       if(Number(questionIndex)===questions?.length)
          navigate(`/${categoryId}/result`,{replace:true})
       else
          navigate(`/${categoryId}/${Number(questionIndex)+1}`,{replace:true})
        setActiveButton(-1);
        setTimer(40);
    }

    const quitHandler=()=>{
        sessionStorage.removeItem("answerdata");
        dispatch({type:"RESET"});
        navigate("/")
    }
    return(
        <>
        <NavBar/>
        <main className="main-cont flex-row">
            <div className="quiz-container flex-col">
                <header className="quiz-header flex-row">
                    <p className="quiz-count">Question: {questionIndex}/{questions?.length}</p>
                    <p className="timer flex-row"><i className="fas fa-clock icon-md"></i> {timer} sec</p>
                </header>
                <h2 className="quiz-question">{question?.question}</h2>
                <section className="quiz-option-list flex-col">
                  {question.options.map((item,index)=>{
                      return(
                          <div 
                          onClick={()=>setActiveButton(index)}
                          className={index===Number(activeButton)?'quiz-option-selected flex-row':'quiz-option-unselected flex-row'}
                          >{item.value}</div>
                      )
                  })}
                </section>
                <footer className="quiz-footer flex-row">
                    <button className="btn quit-btn"
                    onClick={quitHandler}
                    >Quit</button>
                    {questionIndex===questions?.length?
                     <button className="btn next-btn"
                     onClick={()=>dispatchQuizAnswer(activeButton,Number(questionIndex),dispatch,questions)}
                     >Submit {" "} <i className="fas fa-arrow-right icon-sm"></i></button>:
                     <button className="btn next-btn"
                    onClick={()=>dispatchQuizAnswer(activeButton,Number(questionIndex),dispatch,questions)}
                    >Next {" "} <i className="fas fa-arrow-right icon-sm"></i></button>
                    }
                </footer>
            </div>
        </main>
        </>
    )
}