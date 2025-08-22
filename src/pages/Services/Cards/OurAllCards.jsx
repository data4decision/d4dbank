import React from 'react'
import OurAllCardHero from '../../../components/OurAllCardHero'
import CardCoperate from '../../../components/CardCoperate'

const OurAllCards = ({darkMode, setDarkMode}) => {
  return (
    <div>
      <OurAllCardHero darkMode={darkMode} setDarkMode={setDarkMode}/>
      <CardCoperate darkMode={darkMode} setDarkMode={setDarkMode}/>
    </div>
  )
}

export default OurAllCards