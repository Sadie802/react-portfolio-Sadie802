import React from 'react'
import { Routes, Route} from "react-router-dom";
import './App.css';
import Home from './Home'
import About from './About'
import Projects from './Projects'
import WorkHistory from './WorkHistory'
import Contact from './Contact'
import ThankYou from './ThankYou'

function App() {

  return (
    <div id='background'>
      <Routes> 
        <Route path="/" element={<Home />}/>
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
