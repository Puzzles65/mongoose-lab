const express = require('express');
const router = express.Router();

const flightsCtrl = require('../controllers/flights')


router.get('/', flightsCtrl.index)

router.get('/new', flightsCtrl.new)

router.post('/', flightsCtrl.create)

router.get('/:id', flightsCtrl.show)

//router.post('/flights/:id/destinations', flightsCtrl.addDestination);

module.exports = router;
