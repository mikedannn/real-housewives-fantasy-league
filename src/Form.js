import './App.css';
import React, { useState } from 'react';

const BASE_URL = "http://localhost:3002/housewivesData"
const intitialNewHousewife = {
  name: "",
  image: "",
  city: "",
  age: 0,
}

function Form({ setHousewives }) {

  const [newHousewife, setNewHousewife] = useState(intitialNewHousewife)
  console.log(newHousewife)

  function handleChange(e) {
    setNewHousewife((currentNewHousewifeState) => ({
      ...currentNewHousewifeState, 
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newHousewife)
    })
      .then((response) => response.json())
      .then(data => setHousewives((currentHousewives) => [...currentHousewives, data]));

    setNewHousewife(intitialNewHousewife);
  }

  return (
    <div className="form">
      <h3>Create New Housewife Card</h3>
        <form onSubmit={handleSubmit}>
            <input 
              type='text' 
              name='name' 
              placeholder='Housewife Name' 
              value={newHousewife.name}
              onChange={handleChange}
            />
            <input 
              type='text' 
              name='image' 
              placeholder='Add Image URL' 
              value={newHousewife.image}
              onChange={handleChange}
            />
            <input 
              type='text' 
              name='city' 
              placeholder='City of Origin' 
              value={newHousewife.city}
              onChange={handleChange}
            />
            <input 
              type='number' 
              name='age' 
              placeholder='Age' 
              value={newHousewife.age}
              onChange={handleChange}
            />
            <button className='formButton' type='submit'>Create Card</button>
        </form>
    </div>
  );
}

export default Form;
