import React from 'react';
import './App.css';

import Insight from './Components/InsightLayout';
import LeasePortfolio from './Components/LeasePortfolio';
import About from './Components/About';
import Home from './Components/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppNavbarMaterial from './Components/AppNavbarMaterial';


function App() {
  return (
      <Router>
        <div className='App'>
          <AppNavbarMaterial />
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/insights' exact component={Insight} />
          <Route path='/leases' exact component={LeasePortfolio} />

        </div>
      </Router>
  );
}

export default App;
