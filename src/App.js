import React from 'react';
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

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/housewivespage' element={<HousewivesPage />}/>
          <Route path='/mycastcontainer' element={<MyCastContainer />}/>
          <Route path='/searchhousewives' element={<SearchHousewives />}/>
          <Route path='/form' element={<Form />}/>
        </Routes>
      </div>
    </Router>
  );
}




export default App;
