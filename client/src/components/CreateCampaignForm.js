import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

const CreateCampaignForm = props => {
    const [newCampaign, setNewCampaign] = {
        code: '',
        created: null
    }
    const handleChanges = (e) => {
        setNewCampaign({
          ...newCampaign,
          [e.target.name]: e.target.value
        });
      };

    // can uncomment and assign after you connect component to store
    // const onSubmit = (e) => {
    //     e.preventDefault();
    //     let utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');
    //     newCampaign.created = utc;
    //     props.createCampaign(newCampaign);
    // }

    return (
        <div>
            <h2>New Campaign</h2>
            <p>Give your Campaign a code, you will need it to find it later</p>
            <form>
                <label>Code:</label>
                <input type='text' name='code' />
                <Button color='primary' type='submit'>Create</Button>
            </form>
        </div>
    )
}

export default CreateCampaignForm;