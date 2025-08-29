import React from 'react'
import LargeImageTwoHero from '../../components/LargeImageTwoHero'
import LargeImageTwoComponent from '../../components/LargeImageTwoComponent'

const LargeImageTwo = ({darkMode, setDarkMode}) => {
  return (
    <div>
      <LargeImageTwoHero darkMode={darkMode} setDarkMode={setDarkMode}/>
      <LargeImageTwoComponent darkMode={darkMode} setDarkMode={setDarkMode}/>
    </div>
  )
}

export default LargeImageTwo