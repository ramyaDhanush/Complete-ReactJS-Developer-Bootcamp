import React, {useContext} from 'react'
import ThemeContext from "../Context/ThemeContext"
import AppTheme from '../Colour'

const HeroSection = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme]
  return (
    <div
    style={{
      padding:"1rem",
      backgroundColor:`${currentTheme.backgroundColor}`,
      color:`${currentTheme.textColor}`,
      textAlign:"center"
    }}>
      <div>
        <h1>Context API Theme Toggler</h1>
        <p>This is a great paragraph</p>
        <button style={{backgroundColor:"#26ae60", padding:"10px 150px",fontSize:"20px",color:"#fff",border:`${currentTheme.border}`}}>
          CLICK ME
        </button>
      </div>
    </div>
  )
}

export default HeroSection;