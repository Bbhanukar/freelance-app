let mongoose = require('mongoose');

const usersScema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    regirterDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('users',usersScema);