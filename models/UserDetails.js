const mongoose = require('mongoose');
let detailsSchema = mongoose.Schema({
    current_employer: {
        type: String,
        required : true,
        default : 'self'
    },
    yearsOfExperience: {
        type: Number,
        required: true
    },
    university: {
        type: String,
        required: true,
    },
    degree: {
        type: String,
        required: true
    },
    graduationYear: {
        type: Number,
        required: false
    },
    skills: [String],
});

module.exports = mongoose.model("userDetails", detailsSchema);