import React from 'react';
import {Routes,Route } from 'react-router-dom';
import { LandingPage,Rules,Login,SignUp,Question,Result } from './pages';

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/:categoryId">
            <Route path="rules" element={<Rules/>}/>
            <Route path=":questionIndex" element={<Question/>}/>
            <Route path="result" element={<Result/>}/>
        </Route>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
    </div>
  );
}

export default App;
