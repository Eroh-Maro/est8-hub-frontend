import React from 'react'
import { Link } from 'react-router-dom'

const HouseCard = ({house, cardClass}) => {

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
      <img src={house.coverImage} alt="housepics" />
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

export default HouseCard;