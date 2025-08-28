import React from 'react'
import AboutFaqHero from '../../components/AboutFaqHero'
import AboutFaqComponent from '../../components/AboutFaqComponent'

const Faqs = ({darkMode, setDarkMode}) => {
  return (
    <div>
      <AboutFaqHero darkMode={darkMode} setDarkMode={setDarkMode}/>
      <AboutFaqComponent darkMode={darkMode} setDarkMode={setDarkMode}/>
    </div>
  )
}

export default Faqs