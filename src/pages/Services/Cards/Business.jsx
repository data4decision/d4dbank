import React from 'react'
import CardBusinessHero from '../../../components/CardBussinessHero'
import BusinessCard from '../../../components/BusinessCard'

const Business = ({darkMode, setDarkMode}) => {
  return (
    <div>
      <CardBusinessHero darkMode={darkMode} setDarkMode={setDarkMode}/>
      <BusinessCard  darkMode={darkMode} setDarkMode={setDarkMode}/>
    </div>
  )
}

export default Business