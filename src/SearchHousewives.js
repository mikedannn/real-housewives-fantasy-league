import './App.css';
import React from 'react';

function SearchHousewives({ searchEntry, setSearchEntry }) {
    return (
      <div className='search'>
        <h2 className="searchHousewives" htmlFor='search'>Search Housewives: </h2>
        <input
            type='text'
            id='search'
            placeholder='Type a name'
            value={searchEntry}
            onChange={(e) => setSearchEntry(e.target.value)}
        />
      </div>
    );
}
  
export default SearchHousewives;