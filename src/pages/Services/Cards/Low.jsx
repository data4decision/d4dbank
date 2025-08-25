import React from 'react'
import LowInterestCardHero from '../../../components/LowInterestCardHero'
import BusinessCard from '../../../components/BusinessCard'

const Low = ({darkMode, setDarkMode}) => {
  return (
    <div>
      <LowInterestCardHero darkMode={darkMode} setDarkMode={setDarkMode}/>
      <BusinessCard darkMode={darkMode} setDarkMode={setDarkMode}/>
    </div>
  )
}

export default Low