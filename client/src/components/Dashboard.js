import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { getCampaignById } from '../actions/index'

const Dashboard = props =>{

    const [showMat, setShowMat] = useState(false)
    const [mats, setMats] = useState(props.playerMats)
    const [thisCampaign, setThisCampaign] = useState();
    const [mountCampaign, setMountCampaign] = useState(props.campaigns)

  

    // fix useeffect, campaignArr is undefined
    console.log('campaign state in dashboard initially', props.campaigns)
    console.log('player mats', props.playerMats)

    // maybe route created campaigns to find campaign forms since this useEffect doesn't work
    useEffect(() => {
        console.log('useEffect runs')
        let campaignId = window.localStorage.getItem('campaign_id');
        // let findCampaign = props.campaigns.filter(campaign => {
        //     return campaign.id === campaignId;
        // })
        let campaign = props.getCampaignById(campaignId);
        setThisCampaign(campaign);
    }, [])

    const pickMat = () =>{
        let draw = Math.floor(Math.random() * mats.length);
        const chosen = mats[draw];
        let updatedList = mats.filter(faction => {
          return faction !== chosen;
        })
        setMats(updatedList);
        return chosen;
    }
    console.log('the campaign', thisCampaign)
    return(
        <div>
            {/* <h2>Campaign: {props.campaigns.code}</h2>
            {props.campaigns.players.map(player=> {
                return (
                    <div>
                        <h3>{player.player_name}</h3>
                        <p>{player.faction}</p>
                        <div className='mat-btn'>
                        {showMat ? <p>{pickMat}</p>
                        : <span>click to pick player mat</span>}
                        <Button color='success' onClick={()=> setShowMat(true)}>Roll Mat</Button>
                        </div>

                    </div>
                )
            })}
            button to add player mat */}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        campaigns: state.campaigns,
        playerMats: state.playerMats,
        isFetching: state.isFetching,
        readyToMount: state.readyToMount
    }
}

export default connect(mapStateToProps, { getCampaignById })(Dashboard)