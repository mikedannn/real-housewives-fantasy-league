import React from 'react';
import HousewifeCard from './HousewifeCard';
import './App.css';

function HousewivesList({ housewives, updateHousewife, addMyHousewife }) {

    const returnHousewives = housewives.map((housewife) => (
    <HousewifeCard 
        key={housewife.id}
        housewife={housewife}
        // id={housewife.id} 
        // age={housewife.age} 
        // city={housewife.city} 
        // image={housewife.image} 
        // name={housewife.name}
        // likes={housewife.likes}
        // casted={housewife.casted}
        updateHousewife={updateHousewife}
        addMyHousewife={addMyHousewife}
    />
     ));
    
    return (
        <ul className='cards'>
            {returnHousewives}
         </ul>
    );
}

export default HousewivesList;