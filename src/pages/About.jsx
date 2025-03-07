import React from 'react'
import aboutPic from '../assets/aboutPic.jpg'


const About = () => {
  return (
    <div className='aboutPage'>
              <h2 className='aboutHeading'>
                <div className='aboutTitle'>About <span style={{ color: '#2E4053' }}>EST8 hub</span></div>
              </h2>
    <div className='aboutBody'>
    <img src={aboutPic} className="aboutPic"  alt="happy family" data-aos="fade-up-left" />

    <div className='aboutText' data-aos="fade-up-right">
        <p style={{ textIndent: '10%' }} > <span style={{ color: '#2E4053' }}>EST8 hub</span>is more than just a real estate 
          company - we're a part of the community.
           Our team of local agents is dedicated to helping 
           you find your perfect home, while also 
           supporting local businesses and initiatives.
           We're proud to call delta/Nigeria our home, and
            we can't wait to help you make it yours too.</p>
            <p style={{ textIndent: '10%' }} >
            At <span style={{ color: '#2E4053' }}>EST8 hub</span>, we believe that buying or 
            selling a home is about more than just a transaction 
            - it's about building a life. That's why we take the 
            time to listen to your unique needs and goals, and 
            work tirelessly to ensure a smooth and successful 
            experience. Whether you're a first-time buyer, a 
            growing family, or an empty nester, we're here to 
            guide you every step of the way.
            </p>
      </div>
    </div>
    </div>
  )
}

export default About