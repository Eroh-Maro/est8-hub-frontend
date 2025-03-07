import React, { useEffect, useState } from 'react'
import { FaHouseChimney } from "react-icons/fa6";
import HouseCard from './houses/HouseCard';
import { useFetchAllHousesQuery } from '../redux/features/houses/houses.Api.js';


const noRooms = ["Choose no of rooms", "2", "3", "4", "5"]

const Listings = () => {
    const {data: houses = [] } = useFetchAllHousesQuery();
  const [selectedCategory, setSelectedCategory] = useState("Choose no of rooms");


  console.log("Houses:", houses);
  console.log("Selected Category:", selectedCategory);

  const filteredHouses = selectedCategory === "Choose no of rooms" 
    ? houses 
    : houses.filter(house => house.noRooms === parseInt(selectedCategory));

  console.log("Filtered Houses:", filteredHouses);

    
  
  return (
    <div className='listingContainer'>
     <h2 className='listingTitle'>Listings <FaHouseChimney /></h2>
      <div className='filter'>
        <select 
        onChange={(e) =>  setSelectedCategory(e.target.value)}
        name="noRooms" 
        id="noRooms">
         {
          noRooms.map((noRoom, index) =>(
            <option key={index} value={noRoom}>{noRoom}</option>
          ))
         }
        </select>
      </div>
      <div className='housesSection'>
        {
          filteredHouses.map((house, index) => (
           <HouseCard key={index} house={house}/>
          ))
        }
      </div>
    </div>
  )
}

export default Listings