import React from 'react'
import hero from "../assets/hero.avif"
import HeroSection from '../components/HeroSection'
import BodySection from '../components/bodySection'
import Navbar from '../components/Navbar'
import Suggestions from '../components/Suggestions'


const Home = () => {
  return ( 
  <>
 
  <HeroSection/>
  <BodySection/>
  <Suggestions/>
  </>
    
  )
}

export default Home