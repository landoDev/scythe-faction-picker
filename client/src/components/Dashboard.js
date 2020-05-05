import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';

const Dashboard = props =>{
    const [showMat, setShowMat] = useState(false)
    const [mats, setMats] = useState(props.playerMats)
    const [thisCampaign, setThisCampaign] = useState()

    useEffect(() => {
        let campaignId = window.localStorage.getItem('campaign_id');
        let campaignArr = props.campaigns;
        let findCampaign = campaignArr.filter(campaign => {
            return campaign.id === campaignId;
        })
        setThisCampaign(findCampaign);
    })

    const pickMat = () =>{
        let draw = Math.floor(Math.random() * mats.length);
        const chosen = mats[draw];
        let updatedList = mats.filter(faction => {
          return faction !== chosen;
        })
        setMats(updatedList);
        return chosen;
    }

    return(
        <div>
            <h2>{thisCampaign.code}</h2>
            {thisCampaign.players.map(player=> {
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
            {/* button to add player mat */}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        campaigns: state.campaigns,
        playerMats: state.playerMats
    }
}

export default connect(mapStateToProps, {})(Dashboard)