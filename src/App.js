import React, { useEffect, useState } from 'react';
import './App.css';
import NavBar from './NavBar';
import About from './About';
import HousewivesPage from './HousewivesPage';
import MyCastContainer from './MyCastContainer';
import Form from './Form';
import Home from './Home';
import HousewifeCard from './HousewifeCard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchHousewives from './SearchHousewives';

const BASE_URL = "http://localhost:3002/housewivesData"

function App() {

  const [housewives, setHousewives] = useState([]);

  const [searchEntry, setSearchEntry] = useState('');

  const [myCast, setMyCast] = useState([]);

  useEffect(() => {
    fetch(BASE_URL)
    .then((response) => response.json())
    .then(setHousewives)
  }, []); 

  const filteredHousewives = housewives.filter((housewife) => 
    housewife.name.toLowerCase().includes(searchEntry.toLowerCase())
  )

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route exact path='/' element={<HousewivesPage housewives={housewives} />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/housewivespage' element={<HousewivesPage housewives={housewives}/>}/>
          <Route path='/mycastcontainer' element={<MyCastContainer />}/>
          <Route path='/searchhousewives' element={<SearchHousewives searchEntry={searchEntry} setSearchEntry={setSearchEntry} housewives={filteredHousewives}/>}/>
          <Route path='/form' element={<Form setHousewives={setHousewives}/>}/>
        </Routes>
      </div>
    </Router>
  );
}




export default App;
