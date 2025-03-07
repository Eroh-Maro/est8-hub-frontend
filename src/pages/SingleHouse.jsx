import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetchHouseByIdQuery } from '../redux/features/houses/houses.Api';

const SingleHouse = () => {
  const { id } = useParams();
  const { data: house, error, isLoading } = useFetchHouseByIdQuery(id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading house</div>;
  }

  if (!house) {
    return <div>House not found</div>;
  }

  const formattedPrice = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
  }).format(house.price);

  return (
    <div className="single-house-card">
    <h1 className="single-house-title">{house.name}</h1>
    <img className="single-house-image" src={house.coverImage} alt={house.name} />
    <p className="single-house-description">{house.description}</p>
    <p className="single-house-price">{formattedPrice}</p>
    <p className="single-house-rooms">{house.noRooms} rooms</p>
    <p className="single-house-location">{house.location}</p>
    <button className="cardText button">buy</button>
  </div>
  );
};

export default SingleHouse;