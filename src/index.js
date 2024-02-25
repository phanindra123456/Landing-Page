import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Testimonial from "./Components/Testimonal";
import Contact from "./Components/Contact";
import RestaurantWebsite from "./Components/RestaurantWebsite";
import FoodMenu from './Components/FoodMenu';
import Modal from "./Components/Modal";
import Success from "./Components/success";
import Cancel from "./Components/Cancel";

export default function Land() {
  return (
    <div>
      <BrowserRouter>
        <App />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route
            exact
            path="/RestaurantWebsite"
            element={<RestaurantWebsite />}
          />
          <Route exact path="/Testimonials" element={<Testimonial />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path="/FoodMenu" element={<FoodMenu/>} />
          <Route exact path="/Modal" element={<Modal />} />
          <Route exact path="/Success" element={<Success />} />
          <Route exact path="/Cancel" element={<Cancel />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Land />);
