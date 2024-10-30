const express = require('express');
const launchRouter = express.Router();
const launchController = require('../controller/launches.controller');

launchRouter.post('/', launchController.createLaunch);

launchRouter.get('/', launchController.GetAllLaunchs);

module.exports = launchRouter