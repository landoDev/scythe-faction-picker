import React from 'react';
import { Button } from 'reactstrap';

const CreateCampaignForm = props => {
    return (
        <div>
            <h2>New Campaign</h2>
            <p>Give your Campaign a code, you will need it to find it later</p>
            <form>
                <label>Code:</label>
                <input type='text' />
                <Button color='primary'>Create</Button>
            </form>
        </div>
    )
}

export default CreateCampaignForm;