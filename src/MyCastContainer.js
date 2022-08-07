import './App.css';
import HousewifeCard from './HousewifeCard';

function MyCastContainer({ housewives }) {

  const returnHousewives = housewives.map((housewife) => (
  <HousewifeCard 
      key={housewife.id}
      housewife={housewife}
      // id={housewife.id} 
      // age={housewife.age} 
      // city={housewife.city} 
      // image={housewife.image} 
      // name={housewife.name}
      // likes={housewife.likes}
      // casted={housewife.casted}  
  />
   ));
  
  return (
      <ul className='cards'>
        <h1>My Cast</h1>
          {returnHousewives}
       </ul>
  );
}

// {
//   return (
//     <div className="App">
//       <h1>My Cast</h1>
//        {const returnHousewives = housewives.map((housewife) => (
//           <HousewifeCard 
//               key={housewife.id}
//               id={housewife.id} 
//               age={housewife.age} 
//               city={housewife.city} 
//               image={housewife.image} 
//               name={housewife.name}
//               likes={housewife.likes}
//               casted={housewife.casted}
//               updateHousewife={updateHousewife}
//           />
//            ));
          
//           return (
//               <ul className='cards'>
//                   {returnHousewives}
//                </ul>
//           );
//        }
//     </div>
//   );
// }

export default MyCastContainer;
