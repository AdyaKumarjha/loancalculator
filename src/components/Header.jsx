import React from "react";
// import ThemeToggleBtn from "./ThemeToggleBtn";
import { ThemeProvider } from "../context/theme";
import { useState, useEffect } from "react";
import MenuBar from "./MenuBar";
import LoanCalculator from "./LoanCalculator";

function Header(){

    const [themeMode,setThemeMode] = useState('light')

    const lightTheme =()=>{
        setThemeMode('light')
      }
      const darkTheme = ()=>{
        setThemeMode('dark')
      }
      // actual change in theme
      useEffect(()=>{
        document.querySelector('html').classList.remove('light','dark')
        document.querySelector('html').classList.add(themeMode)
      },[themeMode])

    return(
        <div>
            <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
            <MenuBar/>
            <LoanCalculator/>
            </ThemeProvider>
        </div>
    )
}

export default Header