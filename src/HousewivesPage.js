import './App.css';
import HousewifeCard from './HousewifeCard';
import MyCast from './MyCast';
import Form from './Form';
import HousewivesList from './HousewivesList';

const BASE_URL = "http://localhost:3000/housewives"

function HousewivesPage() {

  return (
    <main>
      <Form />
      <HousewivesList />
      <MyCast />
    </main>
  );
}

export default HousewivesPage;
