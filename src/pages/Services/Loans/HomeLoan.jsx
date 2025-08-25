import React from 'react'
import HomeLoanHero from '../../../components/HomeLoanHero'
import LoanComponents from "../../../components/LoanComponents"

const HomeLoan = ({darkMode, setDarkMode}) => {
  return (
    <div>
      <HomeLoanHero darkMode={darkMode} setDarkMode={setDarkMode}/>
      <LoanComponents darkMode={darkMode} setDarkMode={setDarkMode}/>
    </div>
  )
}

export default HomeLoan