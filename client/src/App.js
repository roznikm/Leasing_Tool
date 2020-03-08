import React from 'react';
import './App.css';

import InsightLayout from './Components/InsightLayout';
import LeaseLayout from './Components/LeaseLayout';
import About from './Components/About';
import Home from './Components/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppNavbarMaterial from './Components/AppNavbarMaterial';
import AppNavbarBottom from './Components/AppNavbarBottom'; 

function App() {
  return (
      <Router>
        <div className='App'>
          <AppNavbarMaterial />
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/insights' exact component={InsightLayout} />
          <Route path='/leases' exact component={LeaseLayout} />
          <AppNavbarBottom/>
        </div>
      </Router>
  );
}

export default App;
