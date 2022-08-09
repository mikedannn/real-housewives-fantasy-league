import React, { useState } from 'react';
import './App.css';

function HousewifeCastCard({ key, housewife }) {

  const BASE_URL = "http://localhost:3002/housewivesData"

  return (

    <li className="card">
        <img className="cardImage" src={housewife.image} alt={housewife.name} />
        <h2>{housewife.name}</h2>
        <p>City: {housewife.city} </p>
        <p>Age: {housewife.age}</p>
        <div className='inCastDiv'>In My Cast!</div>
    </li>
  );
}

export default HousewifeCastCard;