const express = require('express');

const server = express();

server.use(express.json())

server.get('/', (req,res) => {
    res.send(`<h1>Scythe Campaign Manager API</h1>`)
})

module.exports = server;