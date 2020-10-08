const express = require('express');
const { DifferenceController } = require('../controllers/differenceController');
const { DifferenceService }= require('../services/differenceService');

const router = express.Router();

router.get('/difference', async function(req, res) {
    let test = new DifferenceController(new DifferenceService());
    res.send((await test.tempDifference()).toString());
    });

module.exports = router;