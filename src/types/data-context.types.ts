import { ActionType } from "./action.types"

export type Dispatch=(action:ActionType)=>void;

export type DataStateType={
    answer:QuestionStateType[]
   }

export type DataContextType={
    state:DataStateType;
    dispatch:Dispatch;
}

export type ChildPropType={
    children:React.ReactNode
}
export type QuestionStateType={
    questionIndex:Number,
    selectedOption:number
}
