import React from 'react'
import hero from "../assets/hero.avif"
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';


const HeroSection = () => {

  return (
    <div className='heroContainer'>
      <div className='heroSection' >
        <img src={hero}  className="hero" alt="hero" />
        <div  className='heroTextContainer' data-aos="fade-up">
        <p className="heroSubText" data-aos="fade-up" data-aos-delay="200">Welcome to est8 hub</p>
        <h1 className="heroText" data-aos="fade-up" data-aos-delay="400">Discover Exceptional Homes With Est8 Hub</h1>
        <p className="heroSubText2" data-aos="fade-up" data-aos-delay="400">Your premier destination
             for finding the perfect home. Whether you're looking for a cozy apartment or a luxurious estate, 
             we have a wide range of properties to suit your needs and preferences.</p>
           <div className='boxes'data-aos="fade-up" data-aos-delay="500">
           <div className='subText discountBox'> 
            <span className='discount'>10% OFF</span>
            <span className='discountDescription'>on all properties</span></div>
           <div className='subText shopNow'>shop now</div>
           </div>
        </div>
    </div>
    
    </div>
  )
}

export default HeroSection