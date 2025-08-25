import React from 'react'
import RewardCardHero from '../../../components/RewardCardHero'
import BusinessCard from '../../../components/BusinessCard'

const Rewards = ({darkMode, setDarkMode}) => {
  return (
    <div>
      <RewardCardHero darkMode={darkMode} setDarkMode={setDarkMode}/>
      <BusinessCard darkMode={darkMode} setDarkMode={setDarkMode}/>
    </div>
  )
}

export default Rewards