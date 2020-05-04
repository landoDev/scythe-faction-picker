import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createCampaign } from '../actions/index'
import { Link, useHistory } from 'react-router-dom';
import { Button, Spinner } from 'reactstrap';

const CreateCampaignForm = props => {
    const history = useHistory();
    if(props.error === ''){
        console.log('error is an empty string')
    }
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
        console.log('submit starts')
        let utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');
        newCampaign.created = utc;
        setNewCampaign(newCampaign)
        console.log('new campaign', newCampaign)
        props.createCampaign(newCampaign);
        // history.push('/campaign/add-players');
    }
    console.log('check changes', newCampaign)
    return (
        <div>
            <h2>New Campaign</h2>
            <p>Give your Campaign a code, you will need it to find it later</p>
            <form onSubmit={handleSubmit}>
                <label>Code:</label>
                <input type='text' name='code' onChange={handleChanges} />
                {props.isPosting ? <Spinner className='add-btn' color='warning' />
                : <Button color='primary' type='submit'>Create</Button>}
            </form>
        </div>
    )
}

const mapStateToProps = state => {
   return {
    isPosting: state.isPosting,
    error: state.error
   } 
}

export default connect(mapStateToProps, { createCampaign })(CreateCampaignForm);