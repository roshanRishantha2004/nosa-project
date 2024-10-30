const Launch = require('../models/launches.mongo');

exports.createLaunch = async (req, res) => {
    const launch = req.body;

  if (!launch.mission || !launch.rocket || !launch.launchDate
    || !launch.target) {
      return res.status(400).json({
        error: 'Missing required launch property',
      });
    }

  launch.launchDate = new Date(launch.launchDate);
  if (isNaN(launch.launchDate)) {
    return res.status(400).json({
      error: 'Invalid launch date',
    });
  }

  await Launch.create(launch);
  return res.status(201).json(launch);
}

exports.GetAllLaunchs = async (req, res) => {
    try {

        const response = await Launch.find()
        .populate('target', 'keplerName')

        if (!response) 
            return res.status(404).json({ success: false, message: 'Cannot find launches!'});

        res.status(200).json(response)

    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
}