import React from "react";
import useTheme from "../context/theme";
import '../App.css'

export default function ThemeToggleBtn(){

    const {themeMode, lightTheme, darkTheme} = useTheme()

    const onChangeBtn = (e)=>{
        const darkModeStatus = e.currentTarget.checked
        if(darkModeStatus){
            darkTheme()
        }else{
            lightTheme()
        }
    }

    return(
        <div>
            <label style={{position:'relative', display:'inline-flex', alignItems:'center', cursor:'pointer'}}>
            <input type="checkbox" 
            value="" id="toggle" 
            className="sr-only toggle-checkbox" 
            onChange={onChangeBtn}
            checked={themeMode ==='dark'}
            />
            <div className="toggle-div"></div>
            </label>
        </div>
    )
}