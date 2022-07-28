import React, { useEffect, useState } from 'react';
import MyCastContainer from './MyCastContainer';
import Form from './Form';
import HousewivesList from './HousewivesList';
import SearchHousewives from './SearchHousewives';

const BASE_URL = "http://localhost:3002/housewivesData"

function HousewivesPage() {

  const [housewives, setHousewives] = useState([]);

  useEffect(() => {
    fetch(BASE_URL)
    .then((response) => response.json())
    .then(setHousewives)
  }, []); 

  console.log(housewives)

  return (
    <main>
      <Form setHousewives={setHousewives}/>
      <MyCastContainer />
      <SearchHousewives />
      <HousewivesList housewives={housewives} />
    </main>
  );
}

export default HousewivesPage;
