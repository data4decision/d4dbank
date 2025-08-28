import React from 'react'
import ListViewHero from '../../components/ListViewHero'
import ListViewComponent from '../../components/ListViewComponent'

const ListView = ({darkMode, setDarkMode}) => {
  return (
    <div>
      <ListViewHero darkMode={darkMode} setDarkMode={setDarkMode}/>
      <ListViewComponent darkMode={darkMode} setDarkMode={setDarkMode}/>
    </div>
  )
}

export default ListView