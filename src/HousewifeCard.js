import React, { useState } from 'react';
import './App.css';

function HousewifeCard({ age, city, image, name, likes }) {

  const [addToCast, setAddToCast] = useState(true);

  function handleClick(newClick) {
    setAddToCast(newClick);
  }

  return (

    <li className="card">
        <img className="cardImage" src={image} alt={name} />
        <h2>{name}</h2>
        <p>City: {city} </p>
        <p>Age: {age}</p>
        <button className='likeButton'>💎 {likes}</button>
        {addToCast ? (
          <button className='addButton' onClick={() => handleClick(false)}>Add to My Cast!</button>
        ) : (
          <button className='inCastButton' onClick={() => handleClick(true)}>In My Cast!</button>
        )}
    </li>
  );
}

export default HousewifeCard;