import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';

// Component Imports
import QuickFactionForm from './components/QuickFactionForm';
import CreateCampaignForm from './components/CreateCampaignForm';
import Dashboard from './components/Dashboard';
import FindCampaignForm from './components/FindCampaignForm';

// import { Button, Spinner } from 'reactstrap';
import './App.css';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { getCampaignsAll } from './actions/index'
import { ActionHomeDiv } from './styles/Styled'



// THIS PAGES STYLING DOES NOT MAKE USE OF STYLED COMPONENTS AND IS VERY DEPENDENT ON APP.CSS

const App = props => {
  console.log('Ahem... Can I help you? 🤨');
  useEffect(()=> {
    props.getCampaignsAll();
  }, [])

  console.log('campaigns on mount?', props.campaigns)

  return (
    <div className="App">
      <Route exact path='/'>
        <header>
          <h1 className='title'>Scythe Faction Manager</h1>
        </header>
        <QuickFactionForm />
        <ActionHomeDiv>
          <Link to='/create-campaign'>
            <Button color='primary' size='lg'>Create a Campaign</Button>
          </Link>
          {/* Add Link to or add a state that hides the search form for find button */}
          <Link to='/find-campaign'>
            <Button color='primary' size='lg'>Find a Campaign</Button>
          </Link>
        </ActionHomeDiv>
      </Route>
      <Route path='/create-campaign'>
        <CreateCampaignForm />
      </Route>
      <Route path='/find-campaign'>
        <FindCampaignForm />
      </Route>
      <Route path='/dashboard'>
        <Dashboard campaigns={props.campaigns} />
      </Route>
    </div>
  );
}

const mapStateToProps = state =>{
  return {
    campaigns: state.campaigns
  }
}

export default connect(mapStateToProps, { getCampaignsAll }) (App);
