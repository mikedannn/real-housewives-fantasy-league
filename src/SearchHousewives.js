import './App.css';
import React, { useState } from 'react';
import SearchResults from './SearchResults';

function SearchHousewives({ housewives }) {

    const [searchEntry, setSearchEntry] = useState('');

    const filteredHousewives = housewives.filter((housewife) => 
      housewife.name.toLowerCase().includes(searchEntry.toLowerCase())
    )

    return (


      <div className='search'>
        <button className='formButton' onClick={() => console.log("clicked")}>Search Housewives</button>
        {/* <h2 className="searchHousewives" htmlFor='search'>Search Housewives: </h2> */}
        <input
            type='text'
            id='search'
            placeholder='Type a name'
            value={searchEntry}
            onChange={(e) => setSearchEntry(e.target.value)}
        />
        < SearchResults housewives={filteredHousewives}/>
      </div>
    );
}
  
export default SearchHousewives;