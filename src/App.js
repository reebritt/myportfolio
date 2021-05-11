import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Navbar from './components/Navbar';
import Projects from './Projects.js';
import Contact from './Contact.js';
import About from './About.js';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';


function App() {
  return (
  
      <Router>
         <Header />
     
        <div>
          <Navbar />
          <Switch>
            <Route path="/Projects">
              <Projects />
            </Route>
            <Route path="/Contact">
              <Contact />
            </Route>
            <Route path="/">
            <About />
          </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
  
  );
}


export default App;


