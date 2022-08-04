import React, { useState } from 'react';
import './App.css';

function HousewifeCard({ id, age, city, image, name, likes, casted, updateHousewife }) {

  const BASE_URL = "http://localhost:3002/housewivesData"

  const [addToCast, setAddToCast] = useState(true);

  const [likeCard, setLikeCard] = useState(0);

  function handleClick(newClick) {
    setAddToCast(newClick);
  }

  function addLike(e) {

    const housewifeLikes = {
      method: "PATCH", 
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({"likes": likes + 1})
    }
    fetch(`${BASE_URL}/${id}`, housewifeLikes)
    .then((response) => response.json())
    .then((data) => updateHousewife(data))
  }

  return (

    <li className="card">
        <img className="cardImage" src={image} alt={name} />
        <h2>{name}</h2>
        <p>City: {city} </p>
        <p>Age: {age}</p>
        <button className='likeButton' onClick={addLike}>💎 {likes}</button>
        {addToCast ? (
          <button className='addButton' onClick={() => handleClick(false)}>Add to My Cast!</button>
        ) : (
          <button className='inCastButton' onClick={() => handleClick(true)}>In My Cast!</button>
        )}
    </li>
  );
}

export default HousewifeCard;