import React from 'react';
import './App.css';

function HousewifeCard({ age, city, image, name }) {
  return (

    <li className="card">
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>City: {city} </p>
        <p>Age: {age} </p>
        <button>Add to My Cast!</button>
    </li>
  );
}

export default HousewifeCard;