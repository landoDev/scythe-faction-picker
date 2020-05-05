import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createCampaign, getCampaignsAll } from '../actions/index'
import { Link, useHistory } from 'react-router-dom';
import { Button, Spinner } from 'reactstrap';

const CreateCampaignForm = props => {
    const history = useHistory();


    // sets state to render add player form
    const [addPlayers, setAddPlayers] = useState({
        userInput: false,
        randomize: false
    })
    const [showContinue, setShowContinue] = useState(false) // used to render page with given order of conditions
    const [newCampaign, setNewCampaign] = useState({
        code: '',
        created: null
    });
    const handleChanges = (e) => {
        setNewCampaign({
          ...newCampaign,
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

    // instead of this use effect, pass the new code to find campaign by id, then use that id to plug dynamically into the post.. all in the same action and out of this component
    // useEffect(() =>{
    //     getCampaignsAll();
    //     props.campaigns.filter(campaign => {
    //         let thisCampaign = campaign.code === newCampaign.code
    //         return thisCampaign;
    //     })
    // }, [addPlayers])
    console.log('check changes', newCampaign)
    return (
        <div>
            { showContinue ? <span></span>
            :
            <div>
                <h2>New Campaign</h2>
                <p>Give your Campaign a codename, you will need it to find it later</p>
                <form onSubmit={handleCampaignSubmit}>
                    <label>codename:</label>
                    <input type='text' name='code' onChange={handleChanges} />
                    {props.isPosting ? <Spinner className='add-btn' color='warning' />
                    : <Button color='primary' type='submit'>Create</Button>}
                </form>
            </div>
            }
            { showContinue ? // if form submitted prompt to view the rest of the page
            <div>
                <Button color='success' onClick={()=>{ setAddPlayers({...addPlayers, userInput: true})}}>We know our Factions</Button>
                <Button color='success' onClick={()=>{ setAddPlayers({...addPlayers, randomize: true})}}>Pick Factions at random</Button> 
            </div>
            : <span></span> }
            { addPlayers.userInput ?             
                <div className='know-factions'>
                    <h2>Add Players to campaign</h2>
                    {/* Add spinners after I get fetching/posting state from props */}
                    <form>
                        <label className='name-label'>Player Name</label>
                        <input name='name' />
                        <label className='faction-label'>Faction</label>
                        <input name='faction' />
                        <Button className='add-btn' color='success'>Add</Button>
                        <Button className='add-btn' type='submit' color='warning'>Finish Creating Campaign</Button>
                    </form>
                </div>
            : 
            addPlayers.randomize ?
                <div className='random-factions'>
                    <h2>Add Players to campaign</h2>
                    <form>
                        <label className='name-label'>Player Name (Factions will Randomize)</label>
                        <input name='name' />
                        <Button className='add-btn' color='success'>Add</Button>
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
    isPosting: state.isPosting,
    error: state.error
   } 
}

export default connect(mapStateToProps, { createCampaign })(CreateCampaignForm);