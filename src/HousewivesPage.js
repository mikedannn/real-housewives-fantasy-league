import React, { useEffect, useState } from 'react';
import MyCastContainer from './MyCastContainer';
import Form from './Form';
import HousewivesList from './HousewivesList';
import SearchHousewives from './SearchHousewives';

const BASE_URL = "http://localhost:3002/housewivesData"

function HousewivesPage() {

  const [housewives, setHousewives] = useState([]);

  const [searchEntry, setSearchEntry] = useState('');

  const [myCast, setMyCast] = useState([]);

  useEffect(() => {
    fetch(BASE_URL)
    .then((response) => response.json())
    .then(setHousewives)
  }, []); 

  const updateHousewife = (updatedHousewife) => {
    setHousewives(housewives => {
      housewives.map(housewife => {
        if(updatedHousewife.id === housewife.id) {
          return updatedHousewife
        } else {
          return housewife
        }
      })
    })
  }

  const filteredHousewives = housewives.filter((housewife) => housewife.name.toLowerCase().includes(searchEntry.toLowerCase()))

  return (
    <main>
      <Form setHousewives={setHousewives}/>
      <MyCastContainer />
      <SearchHousewives searchEntry={searchEntry} setSearchEntry={setSearchEntry}/>
      <HousewivesList housewives={filteredHousewives} updateHousewife={updateHousewife}/>
    </main>
  );
}

export default HousewivesPage;
