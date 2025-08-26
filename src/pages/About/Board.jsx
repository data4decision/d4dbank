import React from 'react'
import AboutBoardDirectorHero from "../../components/AboutBoardDirectorHero"
import AboutBordOfDirectotComponents from '../../components/AboutBordOfDirectotComponents'

const Board = (darkMode, setDarkMode) => {
  return (
    <div>
      <AboutBoardDirectorHero darkMode={darkMode} setDarkMode={setDarkMode}/>
      <AboutBordOfDirectotComponents darkMode={darkMode} setDarkMode={setDarkMode}/>
    </div>
  )
}

export default Board