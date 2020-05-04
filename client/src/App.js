import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';

// Component Imports
import QuickFactionForm from './components/QuickFactionForm';
import CreateCampaignForm from './components/CreateCampaignForm'
// import { Button, Spinner } from 'reactstrap';
import './App.css';
import { Button } from 'reactstrap';

function App() {
  console.log('Ahem... Can I help you? 🤨');

  return (
    <div className="App">
      <Route exact path='/'>
        <header>
          <h1 className='title'>Scythe Faction Selector</h1>
        </header>
        <QuickFactionForm />
        <Button color='primary' size='lg'>Create a Campaign</Button>
        <Button color='primary' size='lg'>Find a Campaign</Button>
      </Route>
      <Route path='/create-campaign'>
        <CreateCampaignForm />
      </Route>
      <footer className='signature'>Developed by Landon Turner</footer>
    </div>
  );
}

export default App;
