const express = require('express');
const campaignRouter = require('../campaigns/campaigns-router');

const server = express();

server.use(express.json());

server.use("/api/campaigns", campaignRouter);

server.get('/', (req, res) => {
    res.send(`<h1>Scythe Campaign Manager API</h1>`)
})

module.exports = server;