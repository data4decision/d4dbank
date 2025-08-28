import React from 'react'
import GridViewHero from '../../components/GridViewHero'
import GridViewComponents from '../../components/GridViewComponents'

const GridView = ({darkMode, setDarkMode}) => {
  return (
    <div>
      <GridViewHero darkMode={darkMode} setDarkMode={setDarkMode}/>
      <GridViewComponents darkMode={darkMode} setDarkMode={setDarkMode}/>
    </div>
  )
}

export default GridView