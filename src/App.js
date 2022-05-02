import React from 'react'
import { Routes, Route} from "react-router-dom";
import './App.css';
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import WorkHistory from './components/WorkHistory'
import Contact from './components/Contact'
import Landing from './components/Landing'
import AdminPortal from './components/AdminPortal';
import GuessNumber from './components/GuessNumber';
import ReactChat from './components/ReactChat';
import Yelpington from './components/Yelpington';

function App() {

  return (
    <div id='background'>
      <Routes> 
        <Route path="/" element={<Landing />}/>
        <Route path="/home" element ={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/workhistory" element={<WorkHistory />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/AdminPortal" element={<AdminPortal/>}/>
        <Route path="/GuessTheNumber" element={<GuessNumber/>}/>
        <Route path="/ReactChat" element={<ReactChat/>}/>
        <Route path="/Yelpington" element={<Yelpington/>}/>
      </Routes>
    </div>

  );
}

export default App;
