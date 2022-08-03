import './App.css';
import React, { useState } from 'react';
import SearchResults from './SearchResults';

function SearchHousewives({ housewives }) {

    const [searchEntry, setSearchEntry] = useState('');

    const filteredHousewives = searchEntry.length > 0
      ? housewives.filter((housewife) => 
          housewife.name.toLowerCase().includes(searchEntry.toLowerCase())
    ) : []

    return (

      <div className='search'>
        <input className='searchBar'
            type='text'
            id='search'
            placeholder="Type any Housewife's Name"
            value={searchEntry}
            onChange={(e) => setSearchEntry(e.target.value)}
        />
        < SearchResults housewives={filteredHousewives}/>
      </div>
    );
}
  
export default SearchHousewives;