import React, { useState, useEffect } from 'react';

// Component Imports
import QuickFactionForm from './components/QuickFactionForm';
import CreateCampaignForm from './components/CreateCampaignForm'
// import { Button, Spinner } from 'reactstrap';
import './App.css';

function App() {
  console.log('Ahem... Can I help you? 🤨');

  return (
    <div className="App">
      <header>
        <h1 className='title'>Scythe Faction Selector</h1>
      </header>
      <QuickFactionForm />
      <CreateCampaignForm />
      <footer className='signature'>Developed by Landon Turner</footer>
    </div>
  );
}

export default App;
