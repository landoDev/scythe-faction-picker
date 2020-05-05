import React, { useEffect } from 'react';
import { Button } from 'reactstrap';

// REDUNDENT COMPONENT. IF CREATE CAMPAIGN FORM WORKS, MUST DELETE

const AddPlayers = props => {
    // useEffect(() => {

    // })
    // need handle changes, either imported, written or passed through props
    return (
        <div>
            <h2>Add Players to campaign</h2>
            <span>Add some button that will toggle the two forms on this page. Maybe evenuse a local state to decide what to render</span>
            <span>We know our factions: checkbox. If checked render the non random form</span>
            <div className='know-factions'>
                <h2>Add Players to campaign</h2>
                {/* Add spinners after I get fetching/posting state from props */}
                <form>
                    <label className='name-label'>Player Name</label>
                    <input name='name' />
                    <input name='faction' />
                    <Button className='add-btn' color='success'>Add</Button>
                    <Button className='add-btn' type='submit' color='warning'>Finish Creating Campaign</Button>
                </form>
            </div>
            <div className='random-factions'>
                <h2>Add Players to campaign</h2>
                <form>
                    <label className='name-label'>Player Name (Factions will Randomize)</label>
                    <input name='name' />
                    <Button className='add-btn' color='success'>Add</Button>
                    <Button className='add-btn' type='submit' color='warning'>Finish Creating Campaign</Button>
                </form>
            </div>

        </div>

    )
}

export default AddPlayers;