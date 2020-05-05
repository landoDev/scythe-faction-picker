import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createCampaign, getCampaignsAll, addPlayerCampaign } from '../actions/index'
import { Link, useHistory } from 'react-router-dom';
import { Button, Spinner } from 'reactstrap';

const CreateCampaignForm = props => {
    const history = useHistory();


    // sets state to render add player form
    const [addPlayers, setAddPlayers] = useState({
        userInput: false,
        randomize: false
    })
    // local state to post campaign
    const [yourCampaign, setYourCampaign] = useState()
    // local state to take from factions
    const [factionArr, setFactionArr] = useState(props.factions)
    const [showContinue, setShowContinue] = useState(false) // used to render page with given order of conditions
    const [newCampaign, setNewCampaign] = useState({
        code: '',
        created: null
    });
    const [newPlayer, setNewPlayer] = useState({
        player_name: '',
        faction: ''
    })
    const handleChangesCampaigns = (e) => {
        setNewCampaign({
          ...newCampaign,
          [e.target.name]: e.target.value
        });
      };
    
    const handleChangesPlayers = (e) => {
    setNewPlayer({
        ...newPlayer,
        [e.target.name]: e.target.value
    });
    };

      // Maybe change this to handle campaign submit then submit the campaign and players together later? 
    const handleCampaignSubmit = (e) => {
        e.preventDefault();
        console.log('submit starts')
        let utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');
        newCampaign.created = utc;
        setNewCampaign(newCampaign)
        console.log('new campaign', newCampaign)
        props.createCampaign(newCampaign);
        setShowContinue(true) // used to show the continue button
    }
    // handleError checks to see if the campaign had an error on submit and keeps users from adding players to nothing
    const handleError = e =>{
        {props.error === '' ? history.push('campaign/add-players')
        : alert('There was an error adding the campaign, please try again')}
    }

    const handlePlayerSubmit = (e) => {
        e.preventDefault();
        let campaignId = yourCampaign.id;
        props.addPlayerCampaign(campaignId, newPlayer);
        grabCampaign();
    }
    const pickFaction = () =>{
        let draw = Math.floor(Math.random() * factionArr.length);
        const chosen = factionArr[draw];
        let updatedList = factionArr.filter(faction => {
          return faction !== chosen;
        })
        setFactionArr(updatedList);
        return chosen;
    }
    const handlePlayerSubmitRandom = (e) => {
        e.preventDefault();
        console.log('in add player', yourCampaign)
        let campaignId = yourCampaign.id
        let randomFaction = pickFaction()
        newPlayer.faction = randomFaction;
        props.addPlayerCampaign(campaignId, newPlayer);
        grabCampaign();
    }

    const grabCampaign = () => {
        let theCampaigns = props.campaigns
        console.log('the Campaign', theCampaigns)
        const thisCampaign = theCampaigns.filter(campaign => campaign.code === newCampaign.code)
        console.log('this campaign', thisCampaign)
        setYourCampaign(thisCampaign);
    }

    const finalSubmit = () => {
        window.localStorage.setItem('campaign_id', yourCampaign.id)
        history.push('/dashboard');
    }
    console.log('check changes', newCampaign)
    console.log('redux campaign', props.campaigns)
    return (
        <div>
            { showContinue ? <span></span>
            :
            <div>
                <h2>New Campaign</h2>
                <p>Give your Campaign a codename, you will need it to find it later</p>
                <form onSubmit={handleCampaignSubmit}>
                    <label>codename:</label>
                    <input type='text' name='code' onChange={handleChangesCampaigns} />
                    {props.isPosting ? <Spinner className='add-btn' color='warning' />
                    : <Button color='primary' type='submit'>Create</Button>}
                </form>
            </div>
            }
            { showContinue ? // if form submitted prompt to view the rest of the page
            <div>
                <Button color='success' onClick={()=>{ 
                    setAddPlayers({...addPlayers, userInput: true})
                    grabCampaign()
                    }}>We know our Factions</Button>
                <Button color='success' onClick={()=>{ 
                    setAddPlayers({...addPlayers, randomize: true})
                    grabCampaign();
                    }}>Pick Factions at random</Button> 
            </div>
            : <span></span> }
            { addPlayers.userInput ?             
                <div className='know-factions'>
                    <h2>Add Players to campaign</h2>
                    {/* Add spinners after I get fetching/posting state from props */}
                    <form onSubmit={finalSubmit}>
                        <label className='name-label'>Player Name</label>
                        <input name='player_name' onChange={handleChangesPlayers} />
                        <label className='faction-label'>Faction</label>
                        <input name='faction' onChange={handleChangesPlayers} />
                        {props.isPosting ? <Spinner className='add-btn' color='warning' />
                        : <Button className='add-btn' color='success' onClick={handlePlayerSubmit}>Add</Button> }
                        <Button className='add-btn' type='submit' color='warning'>Finish Creating Campaign</Button>
                    </form>
                </div>
            : 
            addPlayers.randomize ?
                <div className='random-factions'>
                    <h2>Add Players to campaign</h2>
                    <form onSubmit={finalSubmit}>
                        <label className='name-label'>Player Name (Factions will Randomize)</label>
                        <input name='name' onChange={handleChangesPlayers}/>
                        {props.isPosting ? <Spinner className='add-btn' color='warning' />
                        : <Button className='add-btn' color='success' onClick={handlePlayerSubmitRandom}>Add</Button> }
                        <Button className='add-btn' type='submit' color='warning'>Finish Creating Campaign</Button>
                    </form>
                </div>
            : <span></span>
            }
        </div>
    )
}

const mapStateToProps = state => {
   return {
    campaigns: state.campaigns,
    factions: state.factions,
    isPosting: state.isPosting,
    error: state.error
   } 
}

export default connect(mapStateToProps, { createCampaign, getCampaignsAll, addPlayerCampaign })(CreateCampaignForm);