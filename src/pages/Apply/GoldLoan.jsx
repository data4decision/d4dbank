import React from 'react'
import GoldLoanHero from '../../components/GoldLoanHero'
import LoanComponents from '../../components/LoanComponents'

const GoldLoan = ({darkMode, setDarkMode}) => {
  return (
    <div>
      <GoldLoanHero darkMode={darkMode} setDarkMode={setDarkMode}/>
      <LoanComponents darkMode={darkMode} setDarkMode={setDarkMode}/>
    </div>
  )
}

export default GoldLoan