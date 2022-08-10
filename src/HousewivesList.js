import React from 'react';
import HousewifeCard from './HousewifeCard';
import './App.css';

function HousewivesList({ housewives, updateHousewife, addMyHousewife }) {

    const returnHousewives = housewives.map((housewife) => (
        <HousewifeCard 
            key={housewife.id}
            housewife={housewife}
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