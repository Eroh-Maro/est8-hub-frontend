import React from 'react'
import body from '../assets/body1.jpg'
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

const BodySection = () => {
    useEffect(() => {
            AOS.init({
              duration: 1000, // You can adjust the duration as needed
            });
          }, []);
  return (
   <div className='bodyContainer'>
     <div className='bodySection'>
        <img src={body} className="bodyPic"  data-aos="fade-right" alt="body" />
        <div className='bodyText' data-aos="fade-left">
        <h3 className='bodyPreText' data-aos="fade-left" data-aos-delay="300">Unveiling Our journey</h3>
        <h2 className='bodyMainText' data-aos="fade-left" data-aos-delay="400">Our Commitment crafting Extraordinary Real Estate Experience </h2>
        <p data-aos="fade-left"data-aos-delay="500" className='bodyParagraph'>EST8 hub stands out as a premier real estate company, 
            boasting years of experience, expert agents, and a proven track record of delivering exceptional results.
             With extensive local market knowledge, cutting-edge technology, and innovative marketing strategies,
              they provide unparalleled service to buyers and sellers. Their dedication to building lasting relationships, 
              tailored approach, and passion for excellence make them the ideal partner for all your real estate needs.</p>
              <div className='bodyPoints'data-aos="fade-left"data-aos-delay="600">
                <div className='targets'><span className='points'>6k+</span>Happy clients</div>
                <div className='targets left'><span className='points'>1k+</span>Different cities</div>
                <div className='targets left'><span className='points'>21k+</span>Project completed</div>
              </div>
        </div>
    </div>
   </div>
  )
}

export default BodySection;