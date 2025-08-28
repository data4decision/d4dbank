import React from 'react'
import VehicleLoanHero from '../../components/VehicleLoanHero'
import LoanComponents from '../../components/LoanComponents'

const VehicleLoan = ({darkMode, setDarkMode}) => {
  return (
    <div>
      <VehicleLoanHero darkMode={darkMode} setDarkMode={setDarkMode}/>
      <LoanComponents darkMode={darkMode} setDarkMode={setDarkMode}/>
    </div>
  )
}

export default VehicleLoan