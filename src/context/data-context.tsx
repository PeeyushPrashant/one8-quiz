import { createContext, useContext, useReducer } from "react";
import { ChildPropType,DataStateType,DataContextType } from "../types";
import { quizReducer } from "../reducer/DataReducer";

const DataContext=createContext<DataContextType>({} as DataContextType);

const initialState:DataStateType={
    answer:[],
};

const DataProvider=({children}:ChildPropType)=>{
    const [state,dispatch]=useReducer(quizReducer,initialState);
  return(
      <DataContext.Provider value={{state,dispatch}}>
          {children}
      </DataContext.Provider>
  )
}

const useData=()=>useContext(DataContext);

export {DataProvider,useData}