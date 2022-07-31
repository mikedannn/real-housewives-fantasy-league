import React from 'react';
import HousewifeCard from './HousewifeCard';
import './App.css';

function HousewivesList({ housewives, updateHousewife }) {

    const returnHousewives = housewives.map((housewife) => (
    <HousewifeCard 
        key={housewife.id}
        id={housewife.id} 
        age={housewife.age} 
        city={housewife.city} 
        image={housewife.image} 
        name={housewife.name}
        likes={housewife.likes}
        updateHousewife={updateHousewife}
    />
     ));
    
    return (
        <ul className='cards'>
            {returnHousewives}
         </ul>
    );
}

export default HousewivesList;