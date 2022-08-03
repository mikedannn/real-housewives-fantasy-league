import React from 'react';
import HousewivesList from './HousewivesList';

function HousewivesPage( {housewives} ) {

  return (
    <main>
      <HousewivesList housewives={housewives} />
    </main>
  );
}

export default HousewivesPage;
