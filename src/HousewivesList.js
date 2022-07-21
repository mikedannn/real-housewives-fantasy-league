import React from 'react';
import HousewifeCard from './HousewifeCard';
import './App.css';

function HousewivesList({ housewives }) {

    const returnHousewives = housewives.map((housewife) => (
    <HousewifeCard 
        key={housewife.id} 
        age={housewife.age} 
        city={housewife.city} 
        image={housewife.image} 
        name={housewife.name}
    />
     ));
    
    return (
        <ul className='cards'>
            {returnHousewives}
         </ul>
    );
}

export default HousewivesList;