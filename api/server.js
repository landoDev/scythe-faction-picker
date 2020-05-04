const express = require('express');
const cors = require('cors')
const campaignRouter = require('../campaigns/campaigns-router');

const server = express();

server.use(express.json());
server.use(cors());

server.use("/api/campaigns", campaignRouter);

server.get('/', (req, res) => {
    res.send(`<h1>Scythe Campaign Manager API</h1>`)
})

module.exports = server;