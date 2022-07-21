import React from 'react';
import {Routes,Route } from 'react-router-dom';
import { LandingPage,Rules,Login,SignUp,Question,Result,Profile } from './pages';
import { Loader } from './components';

import './App.css';
import { useData, useTheme } from './context';

function App() {
  const {theme} = useTheme();
  const {loader}= useData();
  return (
    <div className="App" data-theme={theme}>
      {loader && <Loader/>}
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/:categoryId">
            <Route path="rules" element={<Rules/>}/>
            <Route path=":questionIndex" element={<Question/>}/>
            <Route path="result" element={<Result/>}/>
        </Route>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </div>
  );
}

export default App;
