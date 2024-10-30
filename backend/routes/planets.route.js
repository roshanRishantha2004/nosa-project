const express = require('express');
const planetRouter = express.Router();
const planetController = require('../controller/planets.controller');

planetRouter.get('/', planetController.getAllPlanets);

module.exports = planetRouter