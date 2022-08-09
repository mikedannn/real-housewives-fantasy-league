import React, { useState } from 'react';
import './App.css';

function HousewifeCard({ housewife, updateHousewife, addMyHousewife }) {

  const BASE_URL = "http://localhost:3002/housewivesData"


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

  function changeCastingStatus(e) {
    const housewifeCastingStatus = {
      method: "PATCH", 
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({"casted": !housewife.casted})
    }
    fetch(`${BASE_URL}/${housewife.id}`, housewifeCastingStatus)
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
        <button className='addButton' 
            onClick={function(e){addMyHousewife(housewife);changeCastingStatus()}}>
              Add to My Cast!
        </button>
    </li>
  );
}

export default HousewifeCard;