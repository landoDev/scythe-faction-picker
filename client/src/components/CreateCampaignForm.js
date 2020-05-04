import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createCampaign } from '../actions/index'
import { Link, useHistory } from 'react-router-dom';
import { Button, Spinner } from 'reactstrap';

const CreateCampaignForm = props => {
    const history = useHistory();
    console.log(history)
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


    const handleSubmit = (e) => {
        e.preventDefault();
        let utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');
        newCampaign.created = utc;
        props.createCampaign(newCampaign);
        history.push('/create-campaign/players');
    }

    return (
        <div>
            <h2>New Campaign</h2>
            <p>Give your Campaign a code, you will need it to find it later</p>
            <form onSubmit={handleSubmit}>
                <label>Code:</label>
                <input type='text' name='code' />
                {props.isPosting ? <Spinner className='add-btn' color='warning' />
                : <Button color='primary' type='submit'>Create</Button>}
            </form>
        </div>
    )
}

const mapStateToProps = state => {
   return {
    isPosting: state.isPosting
   } 
}

export default connect(mapStateToProps, { createCampaign })(CreateCampaignForm);