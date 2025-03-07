import React from 'react'
import { useParams } from "react-router-dom"
import { Link } from 'react-router-dom'


const HouseCard = ({house, cardClass}) => {
  const { id } = useParams();

  if (!house) {
    return <div>Loading...</div>; // or handle the undefined case appropriately
  }
  const formattedPrice = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
  }).format(house.price);
  return (
    <div className={`card ${cardClass}`}>
      <Link to={`/houses/${house?._id}`}>
      <img src={house.coverImage} alt="" />
      </Link>
      <div className='cardText'>
      <Link to={`/houses/${house?._id}`}>
       <h3>{house.name}</h3>
       </Link>
        <p>{house.description}</p>
        <p>{formattedPrice}</p>
        <p>{house.noRooms} rooms</p>
        <p>{house.location}</p>
        <button>buy</button>
      </div>

    </div>
  )
}

export default HouseCard