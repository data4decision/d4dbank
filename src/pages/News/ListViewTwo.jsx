import React from 'react'
import ListViewHero from '../../components/ListViewHero'
import ListViewComponentTwo from '../../components/ListViewComponentTwo'

const ListViewTwo = ({darkMode, setDarkMode}) => {
  return (
    <div>
      <ListViewHero darkMode={darkMode} setDarkMode={setDarkMode}/>
      <ListViewComponentTwo darkMode={darkMode} setDarkMode={setDarkMode}/>
    </div>
  )
}

export default ListViewTwo