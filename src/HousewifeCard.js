import React, { useState } from 'react';
import './App.css';

function HousewifeCard({ age, city, image, name }) {
  const [addToCast, setAddToCast] = useState(true);

  function handleClick(newClick) {
    console.log('clicked');
    setAddToCast(newClick);
  }

  return (

    <li className="card">
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>City: {city} </p>
        <p>Age: {age} </p>
        {addToCast ? (
          <button className='addButton' onClick={() => handleClick(false)}>Add to My Cast!</button>
        ) : (
          <button className='inCastButton' onClick={() => handleClick(true)}>In My Cast!</button>
        )}
    </li>
  );
}

export default HousewifeCard;