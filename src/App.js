import React from 'react';
import './App.css';
import NavBar from './NavBar';
import About from './About';
import Housewives from './Housewives';
import MyCast from './MyCast';
import Form from './Form';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
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
