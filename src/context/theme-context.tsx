import { createContext, useContext, useState } from "react";
import { ThemeContextType,ThemePropType } from "../types";

const ThemeContext= createContext<ThemeContextType>({} as ThemeContextType);

const ThemeProvider=({children}:ThemePropType)=>{
    const [theme,setTheme]= useState<string>("dark");
    const changeTheme= ()=>{
        setTheme((mode)=>(mode==="dark"?"light":"dark"))
    }
    return(
        <ThemeContext.Provider value={{theme,changeTheme}}>
          {children}
        </ThemeContext.Provider>
    )
}

const useTheme= ()=> useContext(ThemeContext);

export {ThemeProvider,useTheme}