import React, { useState } from "react";

const Modal = ({ isOpen }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleNameChange = (e) => setName(e.target.value);
  const handlePhoneChange = (e) => setPhone(e.target.value);
  const handleAddressChange = (e) => setAddress(e.target.value);

  const onClose = () => {
    window.history.back();
    console.log('Modal closed');
  };

  const handleSave = () => {
    const userDetails = {
      name,
      phone,
      address,
    };
    // Save details to localStorage
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
    console.log("Details saved successfully:", userDetails);
    localStorage.getItem('userDetails') 
    onClose(); 
  };

  return (
    <div className={`overlay ${isOpen ? "open" : ""}`}>
      <div className="modal">
        <h2>Enter Details</h2>
        <input
          type="text"
          className="text-box"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
        />
        <input
          type="text"
          className="text-box"
          placeholder="Phone No."
          value={phone}
          onChange={handlePhoneChange}
        />
        <input
          type="text"
          className="text-box"
          placeholder="Address"
          value={address}
          onChange={handleAddressChange}
        />
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
        <button className="save-btn" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default Modal;
