import React, { useState } from 'react';
import './App.css';

function HousewifeCard({ housewife, updateHousewife, addMyHousewife }) {

  const BASE_URL = "http://localhost:3002/housewivesData"

  const [addToCast, setAddToCast] = useState(true);

  function handleClick(newClick) {
    setAddToCast(newClick);
  }

  function addLike(e) {
    const housewifeLikes = {
      method: "PATCH", 
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({"likes": housewife.likes + 1})
    }
    fetch(`${BASE_URL}/${housewife.id}`, housewifeLikes)
    .then((response) => response.json())
    .then((data) => updateHousewife(data))
  }

  return (

    <li className="card">
        <img className="cardImage" src={housewife.image} alt={housewife.name} />
        <h2>{housewife.name}</h2>
        <p>City: {housewife.city} </p>
        <p>Age: {housewife.age}</p>
        <button className='likeButton' onClick={addLike}>💎 {housewife.likes}</button>
        {addToCast ? (
          <button className='addButton' onClick={() => addMyHousewife(housewife)}>Add to My Cast!</button>
        ) : (
          <button className='inCastButton' onClick={() => handleClick(false)}>In My Cast!</button>
        )}
    </li>
  );
}

export default HousewifeCard;