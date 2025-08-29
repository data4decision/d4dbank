import React from 'react'
import LargeImageHero from '../../components/LargeImageHero'
import LargeImageComponent from '../../components/LargeImageComponent'

const LargeImage = ({darkMode, setDarkMode}) => {
  return (
    <div>
      <LargeImageHero darkMode={darkMode} setDarkMode={setDarkMode}/>
      <LargeImageComponent darkMode={darkMode} setDarkMode={setDarkMode}/>
    </div>
  )
}

export default LargeImage