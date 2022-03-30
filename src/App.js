import React from 'react'
import { Routes, Route} from "react-router-dom";
import './App.css';
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import WorkHistory from './components/WorkHistory'
import Contact from './components/Contact'
import ThankYou from './components/ThankYou'
import Landing from './components/Landing'

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
          <Route path="/thankyou" element={<ThankYou />}/>
      </Routes>
    </div>

  );
}

export default App;
