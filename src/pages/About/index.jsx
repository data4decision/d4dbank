import React from 'react'
import AboutUsHero from '../../components/AboutUsHero'
import AboutKnow from '../../components/AboutKnow'

const index = ({darkMode, setDarkMode}) => {
  return (
    <div>
      <AboutUsHero darkMode={darkMode} setDarkMode={setDarkMode}/>
      <AboutKnow darkMode={darkMode} setDarkMode={setDarkMode}/>
    </div>
  )
}

export default index