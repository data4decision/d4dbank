import React from 'react'
import PersonalLoanHero from '../../../components/PersonalLoanHero'
import LoanComponents from '../../../components/LoanComponents'

const PersonalLoan = ({darkMode, setDarkMode}) => {
  return (
    <div>
      <PersonalLoanHero darkMode={darkMode} setDarkMopde={setDarkMode}/>
      <LoanComponents darkMode={darkMode} setDarkMopde={setDarkMode}/>
    </div>
  )
}

export default PersonalLoan