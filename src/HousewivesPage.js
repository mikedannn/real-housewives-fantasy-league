import React from 'react';
import HousewivesList from './HousewivesList';

function HousewivesPage( {housewives, updateHousewife} ) {

  return (
    <main>
      <HousewivesList housewives={housewives} updateHousewife={updateHousewife}/>
    </main>
  );
}

export default HousewivesPage;
