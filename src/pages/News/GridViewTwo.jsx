import React from 'react'
import GridViewHero from '../../components/GridViewHero'
import GridViewComponentTwo from '../../components/GridViewComponentTwo'


const GridViewTwo = ({darkMode, setDarkMode}) => {
  return (
    <div>
      <GridViewHero darkMode={darkMode} setDarkMode={setDarkMode}/>
      <GridViewComponentTwo darkMode={darkMode} setDarkMode={setDarkMode}/>
    </div>
  )
}

export default GridViewTwo