import React from "react"


export type ThemeContextType={
    theme:string,
    changeTheme: () => void;
}
export type ThemePropType={
    children:React.ReactNode
}