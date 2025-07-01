const mongoose = require('mongoose');

const Rank = {
    SOLDIER: 'Солдат',
    SERGEANT: 'Сержант',
    SENIOR_SERGEANT: 'Старший сержант',
    JUNIOR_LIEUTENANT: 'Молодший лейтенант',
    LIEUTENANT: 'Лейтенант',
    SENIOR_LIEUTENANT: 'Старший лейтенант',
    CAPTAIN: 'Капітан',
    MAJOR: 'Майор',
    LIEUTENANT_COLONEL: 'Підполковник',
    COLONEL: 'Полковник',
    GENERAL: 'Генерал',
    CIVILIAN: 'Працівник ЗСУ'
};

const militaryPersonSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    rank: {
        type: String,
        enum: Object.values(Rank),
        required: true
    },
    personalNumber: {
        type: String,
        required: true,
        unique: true
    },
    unit: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true // This will add createdAt and updatedAt fields automatically
});

module.exports = {
    MilitaryPerson: mongoose.model('MilitaryPerson', militaryPersonSchema),
    Rank
};
