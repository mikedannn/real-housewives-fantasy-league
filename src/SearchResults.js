import './App.css';
import React from 'react';
import HousewifeCard from './HousewifeCard';

function SearchResults({housewives}) {

    const returnSearchedHousewives = housewives.map((housewife) => (
        <HousewifeCard 
            key={housewife.id}
            id={housewife.id} 
            age={housewife.age} 
            city={housewife.city} 
            image={housewife.image} 
            name={housewife.name}
            likes={housewife.likes}
        />
         ));
        
        return (
            <ul className='cards'>
                {returnSearchedHousewives}
             </ul>
        );
}
  
export default SearchResults;