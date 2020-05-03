const express = require('express')
const router = express.Router();
const Campaigns = require('./campaigns-model');

router.get('/', (req, res) => {
    return Campaigns.find()
    .then(campaigns => {
        res.status(200).json(campaigns)
    })
    .catch(err => {
        res.status(500).json({error: 'Server could not get the list of users', error: err})
    });
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

// add campaign with code
router.post('/', (req, res) => {
    const newCampaign = req.body;
    Campaigns.add(newCampaign); // need to add promise
});

// uses campaign id to add players
router.post('/:id', (req, res) => {
    const { id } = req.params;
    let newPlayer = req.body;
    newPlayer.campaign_id = id;
    Campaigns.addPlayers(newPlayer); // need to add promise
});
// an alternative would be to have a /players to post to then findBy(code) ?
router.post('/players', (req, res) => {
    return null;
});

router.put('/:id', (req, res) => {
    return null;
});

// delete entire campaign
router.delete('/:id', (req, res) => {
    return null;
});

// delete players
router.delete('/:id/players', (req, res) => {
    return null;
});

module.exports = router;