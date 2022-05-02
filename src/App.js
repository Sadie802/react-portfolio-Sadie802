import React from 'react'
import { Routes, Route} from "react-router-dom";
import './App.css';
import Home from './components/Home'
import AdminPortal from './components/AdminPortal';
import GuessNumber from './components/GuessNumber';
import ReactChat from './components/ReactChat';
import Yelpington from './components/Yelpington';

function App() {

  return (
    <div id='background'>
      <Routes> 
        <Route path="/home" element ={<Home />}/>
        <Route path="/AdminPortal" element={<AdminPortal/>}/>
        <Route path="/GuessTheNumber" element={<GuessNumber/>}/>
        <Route path="/ReactChat" element={<ReactChat/>}/>
        <Route path="/Yelpington" element={<Yelpington/>}/>
      </Routes>
    </div>

  );
}

export default App;
