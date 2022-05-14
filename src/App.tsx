import React from 'react';
import {Routes,Route } from 'react-router-dom';
import { LandingPage,Rules } from './pages';

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/rules" element={<Rules/>}/>
      </Routes>
    </div>
  );
}

export default App;
