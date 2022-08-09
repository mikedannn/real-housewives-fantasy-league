import './App.css';
import React from 'react';
import HousewifeCard from './HousewifeCard';

function SearchResults({housewives, updateHousewife, addMyHousewife }) {

    const returnSearchedHousewives = housewives.map((housewife) => (
        <HousewifeCard 
            key={housewife.id}
            housewife={housewife}
            updateHousewife={updateHousewife}
            addMyHousewife={addMyHousewife}
        />
         ));
        
        return (
            <ul className='cards'>
                {returnSearchedHousewives}
            </ul>
        );
}
  
export default SearchResults;