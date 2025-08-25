import React from 'react'
import EducationLoanHero from '../../../components/EducationLoanHero'
import LoanComponents from '../../../components/LoanComponents'

const EducationLoan = ({darkMode, setDarkMode} ) => {
  return (
    <div>
      <EducationLoanHero darkMode={darkMode} setDarkMode={setDarkMode}/>
      <LoanComponents darkMode={darkMode} setDarkMode={setDarkMode}/>
      </div>
  )
}

export default EducationLoan