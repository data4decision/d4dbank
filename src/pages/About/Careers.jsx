import React from 'react'
import AboutCareerHero from '../../components/AboutCareerHero'
import AboutCareerComponent from '../../components/AboutCareerComponent'

const Careers = ({darkMode, setDarkMode}) => {
  return (
    <div>
      <AboutCareerHero darkMode={darkMode} setDarkMode={setDarkMode}/>
      <AboutCareerComponent darkMode={darkMode} setDarkMode={setDarkMode}/>
    </div>
  )
}

export default Careers