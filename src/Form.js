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
      <h3 className='formTitle'>Add a New Housewife!</h3>
        <form onSubmit={handleSubmit}>
            {/* <label>Housewife Name: </label> */}
            <input 
              type='text'
              name='name' 
              placeholder='Housewife Name' 
              value={newHousewife.name}
              onChange={handleChange}
            />
            {/* <label>Image URL: </label> */}
            <input 
              type='text' 
              name='image' 
              placeholder='Add Image URL' 
              value={newHousewife.image}
              onChange={handleChange}
            />
            {/* <label>City: </label> */}
            <input 
              type='text' 
              name='city' 
              placeholder='City of Origin' 
              value={newHousewife.city}
              onChange={handleChange}
            />
            {/* <label>Age: </label> */}
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
