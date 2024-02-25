import React from 'react';
import Daksha from "../Assets/Daksha.jpg";
import {Link} from "react-router-dom"

const HotelCard = ({ name, description, logo, rating }) => (
  <div className="hotel-card">
    <img src={Daksha} alt={Daksha} />
    <div className="hotel-details">
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Rating: {rating}</p>
      <Link to="/FoodMenu" className='button-78'>Order Now</Link>
    </div>
  </div>
);

const RestaurantWebsite = () => {
  const hotels = [
    {
      name: 'Daksha',
      description: 'A luxurious hotel with top-notch amenities.',
      image: 'Daksha.jpg',
      rating: 5,
    },
    {
      name: 'High-Tide',
      description: 'A charming inn with a warm and welcoming atmosphere.',
      image: 'High-Tide.jpg',
      rating: 4,
    },
  ];

  return (
    <div className="restaurant-website">
      <h1>Welcome to Our Restaurant & Hotels</h1>

      <div className="hotel-list">
        {hotels.map((hotel, index) => (
          <HotelCard key={index} {...hotel} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantWebsite;
