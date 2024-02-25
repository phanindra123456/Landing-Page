import React from "react";
import { Link } from "react-router-dom";
import masala from "../Assets/masala.jpg";
import paneer from "../Assets/paneer.jpg";

const FoodMenuItem = ({ name, description, image, price }) => (
  <div className="food-menu-item">
    <img src={masala} alt={name} />
    <div className="food-details">
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Price: Rs. {price}</p>
      <button onClick={checkout} className="button-78">
        check-out
        {/* <Link to="/Modal" className='menu-button'>Checkout</Link>
         */}
      </button>
    </div>
  </div>
);

const checkout = () => {
  const foodMenuItems = [
    {
      name: "Masala Dosa",
      description: "Crispy rice crepe filled with spiced potatoes.",
      image: "masala.jpg",
      price: 80.0,
    },
  ];
  fetch(" http://localhost:5000/create-checkout-session", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
    body: JSON.stringify({
      items: [{ id: 1, price: foodMenuItems[0].price, name: foodMenuItems[0].name }],
    }),
  })
    .then((res) => {
      if (res.ok) return res.json();
      return res.json().then((json) => Promise.reject(json));
    })
    .then(({ url }) => {
      window.location = url;
    })
    .catch((e) => {
      console.log(e.error);
    });
  console.log(foodMenuItems[0].price);
  console.log(foodMenuItems[0].name);
};

const FoodMenu = () => {
  const foodMenuItems = [
    {
      name: "Masala Dosa",
      description: "Crispy rice crepe filled with spiced potatoes.",
      image: "masala.jpg",
      price: 80.0,
    },
    {
      name: "Paneer Butter masala",
      description: "Crispy Paneer reciepe filled with butter .",
      image: "paneer.jpg",
      price: 170.0,
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
