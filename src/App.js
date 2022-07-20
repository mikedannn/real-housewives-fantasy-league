import React from 'react';
import './App.css';
import NavBar from './NavBar';
import About from './About';
import Housewives from './Housewives';
import MyCast from './MyCast';
import Form from './Form';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/housewives' element={<Housewives />}/>
          <Route path='/mycast' element={<MyCast />}/>
          <Route path='/form' element={<Form />}/>
        </Routes>
      </div>
    </Router>
  );
}




export default App;
