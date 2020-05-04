const express = require('express')
const router = express.Router();
const Campaigns = require('./campaigns-model');
const check = require('../middleware/index')

router.get('/', (req, res) => {
    return Campaigns.find() 
    .then(campaigns => {
        console.log('find campaigns', campaigns)
        res.status(200).json(campaigns)
    })
    .catch(err => {
        res.status(500).json({error: 'Server could not get the list of users', error: err})
    });
});

router.get('/:id', check.verifyGetCampaign,(req, res) => {
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
            console.log('get campaign by id', err)
        res.status(500).json({errorMessage: 'Server could not get the campaign', error: err})
        })
    })
});

// add campaign with code
router.post('/', check.verifyPostCampaign, (req, res) => {
    const newCampaign = req.body;
    Campaigns.add(newCampaign)
    .then(campaign => {
      res.status(201).json(campaign)
    })
    .catch(err => {
        console.log('post vampaign', err)
        res.status(500).json({error: "Server could not add the campaign", error: err})
    });
});

// uses campaign id to add players
router.post('/:id', check.verifyPlayerBody, (req, res) => {
    const { id } = req.params;
    const connection = {};
    connection.campaign_id = id;
    let newPlayer = req.body;
    Campaigns.addPlayers(newPlayer, connection)
    .then(player => {
      res.status(201).json({ message: 'new player successfully added to campaign'})
    })
    .catch(err => {
        res.status(500).json({error: "Server could not add player to this campaign", error: err})
    }); // need to add promise
});
// an alternative would be to have a /players to post to then findBy(code) ?
// router.post('/players', (req, res) => {
//     return null;
// });

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