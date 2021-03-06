import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { getCampaignById } from '../actions/index'
import { PlayerDiv } from '../styles/Styled'

const Dashboard = props =>{

    const [showMat, setShowMat] = useState(false)
    const [mats, setMats] = useState(props.playerMats)
    const [thisMat, setThisMat] = useState();
    const [mountCampaign, setMountCampaign] = useState(props.campaigns)

    const fetchCampaign = async () => {
        let campaignId = window.localStorage.getItem('campaign_id');
        const campaign = await props.getCampaignById(campaignId)
        console.log('campaign in async', campaign)
    }

    // fix useeffect, campaignArr is undefined
    console.log('campaign state in dashboard initially', props.campaigns)
    console.log('active campaign', props.active_campaign)
    console.log('player mats', props.playerMats)

    // maybe route created campaigns to find campaign forms since this useEffect doesn't work
    useEffect(() => {
        console.log('useEffect runs')
        fetchCampaign();
    }, [])

    const pickMat = () =>{
        let draw = Math.floor(Math.random() * mats.length);
        const chosen = mats[draw];
        let updatedList = mats.filter(faction => {
          return faction !== chosen;
        })
        setMats(updatedList);
        setThisMat(chosen)
    }

    return(
        <div>
            { props.readyToMount && !props.isFetching ?
            <div className='campaign-container'>
                <div className='title-container'>
                    <h2 className='title' >Campaign: {props.active_campaign.code}</h2>
                </div>
                <div>
                {props.active_campaign.players.map(player=> {
                    return (
                        <PlayerDiv key={player.id}>
                            <h3>{player.player_name}</h3>
                            <p>{player.faction}</p>
                            <div className='mat-btn'>
                            {showMat ? <p>{thisMat}</p>
                            : <div>
                            <Button color='success' size='sm' onClick={()=>{
                            pickMat()   
                            setShowMat(true)
                            }}>Roll Mat</Button>
                            </div>
                            }
                            </div>

                        </PlayerDiv>
                    )
                })}
                </div>
            </div>
            : <div>Loading Players...</div>}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        active_campaign: state.active_campaign,
        playerMats: state.playerMats,
        isFetching: state.isFetching,
        readyToMount: state.readyToMount
    }
}

export default connect(mapStateToProps, { getCampaignById })(Dashboard)