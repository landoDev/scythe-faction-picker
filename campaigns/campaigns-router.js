const express = require('express')
const router = express.Router();
const Campaigns = require('./campaigns-model');

router.get('/', (req, res) => {
    return null;
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    Campaigns.findById(id).then(campaign =>{
        console.log('the returned campaign', campaign)
        const response = campaign;
        Campaigns.getCampaignInfo(id)
        .then(details => {
        console.log('details in get', details)
        // I'd like to return the campaign with a players key with an array of players
        response.players = details;
        res.status(200).json(response);
        })
        .catch(err => {
        res.status(500).json({errorMessage: 'Server could not get the campaign', error: err})
        })
    })
});



router.post('/', (req, res) => {
    return null;
});

router.put('/:id', (req, res) => {
    return null;
});

// delete campaign
router.delete('/:id', (req, res) => {
    return null;
});

// delete players
router.delete('/:id/players', (req, res) => {
    return null;
});

module.exports = router;