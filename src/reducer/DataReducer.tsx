import { DataStateType,ActionType } from "../types"

export const quizReducer=(state:DataStateType,action:ActionType):DataStateType =>{
    switch(action.type){
        case "ADD_QUESTION_DATA":
            return {...state,answer:state.answer.some((el)=>el.questionIndex===action.payload.questionIndex)?
             state.answer.map((element)=>{
                return element.questionIndex===action.payload.questionIndex?action.payload:element
             }):[...state.answer,action.payload]
            }
        case "RECOVER_DATA":
            return {...state, answer:[...action.payload.sessionData]}
        case "RESET":
            return {...state,answer:[]}
        default: return state
    }
    
}