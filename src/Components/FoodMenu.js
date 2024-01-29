import React from 'react';
import masala from "../Assets/masala.jpg";
import paneer from "../Assets/paneer.jpg";


const FoodMenuItem = ({ name, description, image, price }) => (
  <div className="food-menu-item">
    <img src={masala} alt={name} />
    <div className="food-details">
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Price: Rs. {price}</p>
    </div>
  </div>
);

const FoodMenu = () => {
  const foodMenuItems = [
    {
      name: 'Masala Dosa',
      description: 'Crispy rice crepe filled with spiced potatoes.',
      image: 'masala.jpg',
      price: 80.00,
    },
    {
      name: 'Paneer Butter masala',
      description: 'Crispy Paneer reciepe filled with butter .',
      image: 'paneer.jpg',
      price: 170.00,
    },
  ];

  return (
    <div className="food-menu">
      <h2>Food Menu</h2>

      <div className="food-menu-list">
        {foodMenuItems.map((item, index) => (
          <FoodMenuItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default FoodMenu;
