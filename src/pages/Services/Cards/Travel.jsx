import React from 'react'
import TravelCardHero from '../../../components/TravelCardHero'
import BusinessCard from '../../../components/BusinessCard'

const Travel = ({darkMode, setDarkMode}) => {
  return (
    <div>
      <TravelCardHero darkMode={darkMode} setDarkMode={setDarkMode}/>
      <BusinessCard darkMode={darkMode} setDarkMode={setDarkMode}/>
    </div>
  )
}

export default Travel