import React from 'react';
import HousewivesList from './HousewivesList';

function HousewivesPage( {housewives, updateHousewife, addMyHousewife} ) {

  return (
    <main>
      <HousewivesList housewives={housewives} updateHousewife={updateHousewife} addMyHousewife={addMyHousewife}/>
    </main>
  );
}

export default HousewivesPage;
