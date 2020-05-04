const Campaigns = require('../campaigns/campaigns-model');

module.exports = {
    verifyGetCampaign,
    verifyPostCampaign,
    verifyPlayerBody, 
    corsProxy
}

function verifyGetCampaign(req, res, next) {
    const { id } = req.params;
    Campaigns.findById(id)
    .then(campaign => {
      if(campaign){
        req.campaign = campaign;
        next();
      } else {
        res.status(404).json({message: `Campaign with the id of ${id} was not found`})
      }
    })
    .catch(err => {
      res.status(500).json({message: 'Could not get campaign'})
    });
}

function verifyPostCampaign(req, res, next) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
        return res.status(400).json({ message: "missing campaign data" })
      } else {
       if (!req.body.code) {
        return res.status(400).json({ message: "missing required field: code" })
      } 
      next();
      }
}

function verifyPlayerBody(req, res, next) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
        return res.status(400).json({ message: "missing player data" })
      } else {
       if (!req.body.player_name) {
        return res.status(400).json({ message: "missing required field: player_name" })
      } else if (!req.body.faction) {
        return res.status(400).json({ message: "missing required field: faction" })
      }
      next();
      }
};

function corsProxy(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
}