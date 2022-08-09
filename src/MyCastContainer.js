import './App.css';
import HousewifeCastCard from './HousewifeCastCard';

function MyCastContainer({ housewives }) {

  const returnHousewives = housewives.map((housewife) => (
    <HousewifeCastCard 
      key={housewife.id}
      housewife={housewife}
    />
  ));
  
  return (
    <div>
      <h1 className='myCastTitle'>My Cast</h1>
      <ul className='cards'>
          {returnHousewives}
       </ul>
    </div>
  );
}

export default MyCastContainer;
