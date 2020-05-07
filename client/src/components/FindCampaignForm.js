import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createCampaign, getCampaignsAll, addPlayerCampaign } from '../actions/index'
import { Link, useHistory } from 'react-router-dom';
import { Button, Spinner } from 'reactstrap';

const FindCampaignForm = props => {
    const history = useHistory();

    // local state to post campaign
    const [yourCampaign, setYourCampaign] = useState([])
    const [findCampaign, setFindCampaign] = useState({
        code: '',
    });

    const handleChanges = (e) => {
        setFindCampaign({
          ...findCampaign,
          [e.target.name]: e.target.value
        });
      };
    
    console.log('campaigns in find', props.campaigns)


    const grabCampaign = () => {
        let theCampaigns = props.campaigns
        console.log('the Campaign', theCampaigns)
        const thisCampaign = theCampaigns.filter(campaign => campaign.code === findCampaign.code)
        console.log('this campaign', thisCampaign)
        setYourCampaign(thisCampaign);
        console.log('campaign after setting', yourCampaign)
    }

    const finalSubmit = e => {
        e.preventDefault();
        // grabCampaign();
        // console.log('find submit', yourCampaign)
        let theCampaigns = props.campaigns
        console.log('the Campaign', theCampaigns)
        const thisCampaign = theCampaigns.filter(campaign => campaign.code === findCampaign.code)
        console.log('this campaign', thisCampaign[0])
        window.localStorage.setItem('campaign_id', thisCampaign[0].id)
        history.push('/dashboard');
    }
    console.log('findCampaign', findCampaign)
    return (
        <div>
            <form onSubmit={finalSubmit}>
                <label>Campaign Code:</label>
                <input name='code' onChange={handleChanges} />
                {props.readyToMount ? <Button type='submit' color='success'>Find Campaign</Button>
                :<Button type='submit' color='success' disabled>Find Campaign</Button>
                }
                
                
            </form>
        </div>
    )
}

const mapStateToProps = state => {
   return {
    campaigns: state.campaigns,
    isPosting: state.isPosting,
    readyToMount: state.readyToMount,
    error: state.error
   } 
}

export default connect(mapStateToProps, { createCampaign, getCampaignsAll, addPlayerCampaign })(FindCampaignForm);