import React, { useEffect } from 'react';
import MyCast from './MyCast';
import Form from './Form';
import HousewivesList from './HousewivesList';

const BASE_URL = "http://localhost:3002/housewivesData"

function HousewivesPage() {

  useEffect(() => {
    fetch(BASE_URL)
    .then((response) => response.json())
    .then((housewivesData) => console.log(housewivesData))
  }, []) 

  return (
    <div>
      <h1>HOUSEWIVES PAGE</h1>
    </div>
  );
}

export default HousewivesPage;
