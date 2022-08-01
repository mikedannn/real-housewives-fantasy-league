import React, { useEffect, useState } from 'react';
import MyCastContainer from './MyCastContainer';
import Form from './Form';
import HousewivesList from './HousewivesList';
import SearchHousewives from './SearchHousewives';

const BASE_URL = "http://localhost:3002/housewivesData"

function HousewivesPage( {housewives} ) {

  // const [housewives, setHousewives] = useState([]);

  // const [searchEntry, setSearchEntry] = useState('');

  // const [myCast, setMyCast] = useState([]);

  // useEffect(() => {
  //   fetch(BASE_URL)
  //   .then((response) => response.json())
  //   .then(setHousewives)
  // }, []); 



  // const filteredHousewives = housewives.filter((housewife) => 
  //   housewife.name.toLowerCase().includes(searchEntry.toLowerCase())
  // )

  return (
    <main>
      <HousewivesList housewives={housewives} />
      {/* <Form setHousewives={setHousewives}/> */}
      {/* <MyCastContainer /> */}
      {/* <SearchHousewives searchEntry={searchEntry} setSearchEntry={setSearchEntry}/> */}
      {/* <HousewivesList housewives={filteredHousewives} /> */}
    </main>
  );
}

export default HousewivesPage;
