import React from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import MessageSection from './sections/MessageSection'
import FlavourSection from './sections/FlavourSection'


gsap.registerPlugin(ScrollTrigger)

const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <MessageSection/>
      <FlavourSection/>
      
    </main>
  )
}

export default App