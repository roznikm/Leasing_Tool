import React from 'react';
import AppNavbar from './components/AppNavbar';

import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';
import LeaseTable from './components/LeaseTable';
import LeaseForm from './components/LeaseForm';

function App() {
  return (
    <div className="App">
      <AppNavbar/>
      <LeaseForm />
      <LeaseTable/>
    </div>
  );
}

export default App;
