import React, { useRef } from 'react';
import HouseCard from '../pages/houses/HouseCard.jsx';
import { useFetchAllHousesQuery } from '../redux/features/houses/houses.Api.js';


const Suggestions = () => {
  
  const {data: houses = [] } = useFetchAllHousesQuery();

      const filteredHouses = houses.slice(0, 8); // Get only the first 8 houses
      const containerRef = useRef(null);

      const scrollLeft = () => {
        containerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
      };
    
      const scrollRight = () => {
        containerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
      };
  return (
   <div className='suggestionSection'>
    <h3 className='suggestiontitle listingTitle'>Suggestions</h3>
    <button className="nav-button left" onClick={scrollLeft}>‹</button>
     <div className="suggestions-container" data-aos="fade-left" ref={containerRef}>
      {filteredHouses.map((house, index) => (
       <HouseCard key={index} house={house} cardClass="suggestions-card" />
      ))}
    </div>
    <button className="nav-button right" onClick={scrollRight}>›</button>
   </div>
  )
}

export default Suggestions