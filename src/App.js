import React, { useEffect, useState } from 'react';
import './App.css';
import NavBar from './NavBar';
import About from './About';
import HousewivesPage from './HousewivesPage';
import MyCastContainer from './MyCastContainer';
import Form from './Form';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchHousewives from './SearchHousewives';

const BASE_URL = "http://localhost:3002/housewivesData"

function App() {

  const [housewives, setHousewives] = useState([]);
  const [myHousewives, setMyHousewives] = useState([]);

  useEffect(() => {
    fetch(BASE_URL)
    .then((response) => response.json())
    .then(setHousewives)
  }, []); 

  const updateHousewife = (updatedHousewife) => {
    setHousewives(housewives => {
      return housewives.map(housewife => {
        if(updatedHousewife.id === housewife.id){
          return updatedHousewife
        } else {
          return housewife
        }
      })
    })
  } 

  const addMyHousewife = (housewife) => {
    console.log(housewife)
    if(!myHousewives.includes(housewife)){
      console.log('clicked')
      const updatedMyHousewives =[...myHousewives, housewife]
      setMyHousewives(updatedMyHousewives)
    } else {
      alert('Housewife already added to your cast!')
    }
  }

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route exact path='/' element={<HousewivesPage housewives={housewives} updateHousewife={updateHousewife} addMyHousewife={addMyHousewife}/>}/>
          <Route path='/about' element={<About />}/>
          <Route path='/housewivespage' element={<HousewivesPage housewives={housewives} updateHousewife={updateHousewife} addMyHousewife={addMyHousewife}/>}/>
          <Route path='/mycastcontainer' element={<MyCastContainer housewives={myHousewives}/>}/>
          <Route path='/searchhousewives' element={<SearchHousewives housewives={housewives}/>}/>
          <Route path='/form' element={<Form setHousewives={setHousewives}/>}/>
        </Routes>
      </div>
    </Router>
  );
}




export default App;
