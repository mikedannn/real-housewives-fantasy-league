import React, { useState } from 'react';
import './App.css';

// function HousewifeCard({ id, age, city, image, name, likes, casted, updateHousewife, addMyHousewife }) {
function HousewifeCastCard({ key, housewife }) {

  const BASE_URL = "http://localhost:3002/housewivesData"

//   function handleClick(newClick) {
//     setAddToCast(newClick);
//   }

//   function addLike(e) {

//     const housewifeLikes = {
//       method: "PATCH", 
//       headers: {
//         "Content-type": "application/json"
//       },
//       body: JSON.stringify({"likes": housewife.likes + 1})
//     }
//     // fetch(`${BASE_URL}/${id}`, housewifeLikes)
//     fetch(`${BASE_URL}/${housewife.id}`, housewifeLikes)
//     .then((response) => response.json())
//     .then((data) => updateHousewife(data))
//   }

  return (

    <li className="card">
        <img className="cardImage" src={housewife.image} alt={housewife.name} />
        <h2>{housewife.name}</h2>
        <p>City: {housewife.city} </p>
        <p>Age: {housewife.age}</p>
        <button className='inCastButton' onClick={console.log('clicked')}>In My Cast!</button>
        
    </li>
  );
}

export default HousewifeCastCard;