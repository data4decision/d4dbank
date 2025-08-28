import React from 'react'
import AboutTestimonialComp from '../../components/AboutTestimonialComp'
import AboutTestimonialHero from '../../components/AboutTestimonialHero'

const Testimonials = ({darkMode, setDarkMode}) => {
  return (
    <div>
      <AboutTestimonialHero darkMode={darkMode} setDarkMode={setDarkMode}/>
      <AboutTestimonialComp darkMode={darkMode} setDarkMode={setDarkMode}/>
    </div>
  )
}

export default Testimonials