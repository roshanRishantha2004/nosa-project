const Planet = require('../models/planets.mongo');

exports.getAllPlanets = async (req, res) => {
    try {

        const response = await Planet.find();

        if (!response) 
            return res.status(404).json({ success: false, message: 'Cannot find planets!'});

        res.status(200).json(response)

    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
}