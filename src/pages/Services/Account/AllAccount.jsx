import React from 'react'
import AllAccountComponents from '../../../components/AllAccountComponents'
import LetThink from '../../../components/LetThink'
import AllTrading from '../../../components/AllTrading'
import AllYourAccount from '../../../components/AllYourAccount'
import HeroBanner from '../../../components/HeroBanner'
import Questions from '../../../components/Questions'

const AllAccount = ({darkMode, setDarkMode}) => {
  return (
    <div>
      <AllAccountComponents darkMode={darkMode} setDarkMode={setDarkMode} />
      <LetThink darkMode={darkMode} setDarkMode={setDarkMode} />
      <AllTrading darkMode={darkMode} setDarkMode={setDarkMode} />
      <AllYourAccount darkMode={darkMode} setDarkMode={setDarkMode} />
       <HeroBanner darkMode={darkMode} setDarkMode={setDarkMode} />
       <Questions darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  )
}

export default AllAccount