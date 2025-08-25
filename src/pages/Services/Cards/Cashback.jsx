import React from 'react'
import CashbackCardHero from '../../../components/CashbackCardHero'
import BusinessCard from '../../../components/BusinessCard'

const Cashback = ({darkMode, setDarkMode}) => {
  return (
    <div>
      <CashbackCardHero darkMode={darkMode} setDarkMode={setDarkMode}/>
      <BusinessCard darkMode={darkMode} setDarkMode={setDarkMode}/>
    </div>
  )
}

export default Cashback