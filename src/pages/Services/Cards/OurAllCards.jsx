import React from 'react'
import OurAllCardHero from '../../../components/OurAllCardHero'
import CardCoperate from '../../../components/CardCoperate'
import CardType from "../../../components/CardType"

const OurAllCards = ({darkMode, setDarkMode}) => {
  return (
    <div>
      <OurAllCardHero darkMode={darkMode} setDarkMode={setDarkMode}/>
      <CardCoperate darkMode={darkMode} setDarkMode={setDarkMode}/>
      <CardType darkMode={darkMode} setDarkMode={setDarkMode}/>
    </div>
  )
}

export default OurAllCards