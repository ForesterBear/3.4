const express = require('express');
const { MilitaryPerson, Rank } = require('../models/militaryPerson');
const router = express.Router();

// Get all military personnel
router.get('/', async (req, res) => {
    try {
        const personnel = await MilitaryPerson.find();
        res.json(personnel);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get one person by ID
router.get('/:id', async (req, res) => {
    try {
        const person = await MilitaryPerson.findById(req.params.id);
        if (!person) {
            return res.status(404).json({ message: 'Person not found' });
        }
        res.json(person);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create new person
router.post('/', async (req, res) => {
    const person = new MilitaryPerson(req.body);
    try {
        const newPerson = await person.save();
        res.status(201).json(newPerson);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Update person
router.put('/:id', async (req, res) => {
    try {
        const person = await MilitaryPerson.findById(req.params.id);
        if (!person) {
            return res.status(404).json({ message: 'Person not found' });
        }

        Object.assign(person, req.body);
        const updatedPerson = await person.save();
        res.json(updatedPerson);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete person
router.delete('/:id', async (req, res) => {
    try {
        const person = await MilitaryPerson.findById(req.params.id);
        if (!person) {
            return res.status(404).json({ message: 'Person not found' });
        }

        await person.deleteOne();
        res.json({ message: 'Person deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get available ranks
router.get('/ranks/list', (req, res) => {
    res.json(Object.values(Rank));
});

module.exports = router;
