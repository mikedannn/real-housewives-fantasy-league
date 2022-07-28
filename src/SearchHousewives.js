import './App.css';
import React from 'react';

function SearchHousewives() {
    return (
      <div className='search'>
        <label htmlFor='search'>Search Housewives</label>
        <input
            type='text'
            id='search'
            placeholder='Type a name'
            onChange={(e) => console.log('Searching...')}
        />
      </div>
    );
}
  
export default SearchHousewives;