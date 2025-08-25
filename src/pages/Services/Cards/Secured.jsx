import React from 'react'
import SecuredCardHero from '../../../components/SecuredCardHero'
import BusinessCard from '../../../components/BusinessCard'

const Secured = ({darkMode, setDarkMode}) => {
  return (
    <div>
      <SecuredCardHero darkMode={darkMode} setDarkMode={setDarkMode}/>
      <BusinessCard darkMode={darkMode} setDarkMode={setDarkMode}/>
    </div>
  )
}

export default Secured