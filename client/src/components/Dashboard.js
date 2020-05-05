import React, { useEffect } from 'react';
import { connect } from 'react-redux';

const Dashboard = props =>{
    return(
        <div>
            <h2>Campaign</h2>
            <p>Players</p>
            button to add player mat
        </div>
    )
}

const mapStateToProps = state => {
    return {
        playerMats: state.playerMats
    }
}

export default connect(mapStateToProps, {})(Dashboard)