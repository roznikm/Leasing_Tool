import React from 'react';
import AppNavbar from './components/AppNavbar';
import { Provider } from 'react-redux';
import store from './store';
import { Container } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import LeaseTable from './components/LeaseTable';
import LeaseForm from './components/LeaseForm';
import TableMaterial from './components/TableMaterial'; 

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <AppNavbar />
        <Container>
          <LeaseForm />
          <TableMaterial />
        </Container>
      </div>
    </Provider>
  );
}

export default App;
