import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';

// Component Imports
import QuickFactionForm from './components/QuickFactionForm';
import CreateCampaignForm from './components/CreateCampaignForm';
import AddPlayers from './components/AddPlayers';
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
        <div className='home-actions'>
          <Link to='/create-campaign'>
            <Button color='primary' size='lg'>Create a Campaign</Button>
          </Link>
          {/* Add Link to or add a state that hides the search form for find button */}
          <Button color='primary' size='lg'>Find a Campaign</Button>
        </div>
      </Route>
      <Route path='/create-campaign'>
        <CreateCampaignForm />
      </Route>
      <Route exact path='/campaign/add-players'>
        <AddPlayers />
      </Route>
      <footer className='signature'>Developed by Landon Turner</footer>
    </div>
  );
}

export default App;
