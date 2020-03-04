import React from 'react';
import AppNavbar from './components/AppNavbar';
import { Container } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Report from './components/Report';
import LeaseForm from './components/LeaseForm';
import TableMaterial from './components/TableMaterial';

import About from './components/About';
import Home from './components/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
      <Router>
        <div className='App'>
          <AppNavbar />
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Container>
            <Route path='/portfolio' component={LeaseForm} />
            <Route path='/portfolio' component={TableMaterial} />
          </Container>
        </div>
        <Route path='/report' component={Report} />
      </Router>
  );
}

export default App;
