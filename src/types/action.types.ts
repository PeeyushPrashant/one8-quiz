import {QuestionStateType} from "./data-context.types"

export type ActionType={
    type:"ADD_QUESTION_DATA",
    payload:QuestionStateType
} |
{
    type:"RESET"
} |
{
    type:"RECOVER_DATA",
    payload:{sessionData:QuestionStateType[]}
}