import React from 'react'
import AboutCareerDetailHero from '../../components/AboutCareerDetailHero'
import AboutCareerDetailComponent from '../../components/AboutCareerDetailComponent'

const CareerDetail = ({darkMode, setDarkMode}) => {
  return (
    <div>
      <AboutCareerDetailHero darkMode={darkMode} setDarkMode={setDarkMode}/>
      <AboutCareerDetailComponent darkMode={darkMode} setDarkMode={setDarkMode}/>
    </div>
  )
}

export default CareerDetail