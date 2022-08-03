import React, { useEffect, useState } from 'react';
import './App.css';
import NavBar from './NavBar';
import About from './About';
import HousewivesPage from './HousewivesPage';
import MyCastContainer from './MyCastContainer';
import Form from './Form';
import HousewifeCard from './HousewifeCard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchHousewives from './SearchHousewives';

const BASE_URL = "http://localhost:3002/housewivesData"

function App() {

  const [housewives, setHousewives] = useState([]);

  const [myCast, setMyCast] = useState([]);

  useEffect(() => {
    fetch(BASE_URL)
    .then((response) => response.json())
    .then(setHousewives)
  }, []); 

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route exact path='/' element={<HousewivesPage housewives={housewives} />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/housewivespage' element={<HousewivesPage housewives={housewives}/>}/>
          <Route path='/mycastcontainer' element={<MyCastContainer />}/>
          <Route path='/searchhousewives' element={<SearchHousewives housewives={housewives}/>}/>
          <Route path='/form' element={<Form setHousewives={setHousewives}/>}/>
        </Routes>
      </div>
    </Router>
  );
}




export default App;
