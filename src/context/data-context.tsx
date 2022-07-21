import { createContext, useContext, useReducer, useState } from "react";
import { ChildPropType,DataStateType,DataContextType } from "../types";
import { quizReducer } from "../reducer/DataReducer";

const DataContext=createContext<DataContextType>({} as DataContextType);

const initialState:DataStateType={
    answer:[],
};

const DataProvider=({children}:ChildPropType)=>{
    const [state,dispatch]=useReducer(quizReducer,initialState);
    const [loader,setLoader]= useState<boolean>(false);
  return(
      <DataContext.Provider value={{state,dispatch,loader,setLoader}}>
          {children}
      </DataContext.Provider>
  )
}

const useData=()=>useContext(DataContext);

export {DataProvider,useData}