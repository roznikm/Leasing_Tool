import React from 'react';
import './App.css';

import Insight from './Components/Layout/Insights';
import Portfolio from './Components/Layout/Portfolio';
import About from './Components/Layout/About';
import Home from './Components/Layout/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppNavbarMaterial from './Components/Layout/AppNavbarMaterial';


function App() {
  return (
      <Router>
        <div className='App'>
          <AppNavbarMaterial />
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/insights' exact component={Insight} />
          <Route path='/leases' exact component={Portfolio} />

        </div>
      </Router>
  );
}

export default App;
