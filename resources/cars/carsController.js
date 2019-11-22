const db = require('../../data/dbConfig');

exports.getCars = (req, res) => {
    db('cars')
        .then(cars => res.status(200).json(cars))
        .catch(err => res.status(500).json({ message: 'Could not access db' }));
}

exports.getCarById = (req, res) => {
    const id = req.params.id;
    db('cars')
        .where('id', id)
        .then(car => res.status(200).json(car))
        .catch(err => res.status(500).json({ message: 'Could not access db' }));
}

exports.createCar = (req, res) => {
    const car = req.body;
    db('cars')
        .insert(car)
        .then(data => res.status(201).json(data))
        .catch(err => res.status(500).json({ message: 'Could not access db' }));
}
