const express = require('express');

const server = express();

const carsRouter = require('./resources/cars/carsRouter');

server.use(express.json());

server.use('/cars', carsRouter);

server.get('/', (req, res) => {
    res.send('Server Running');
})


module.exports = server;