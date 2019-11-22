const router = require('express').Router();

const carController = require('./carsController');

router.get('/', carController.getCars);
router.get('/:id', carController.getCarById);
router.post('/', carController.createCar);

module.exports = router;