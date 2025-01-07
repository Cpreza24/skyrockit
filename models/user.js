const mongoose = require('mongoose');

// Creates an EMBEDDED relationship
// Call this before embedding in the userSchema
const applicationSchema = new mongoose.Schema({
    company: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    notes: {
        type: String,
    },
    postingLink: {
        type: String,
    },
    status: {
        type: String,
        //enum is a type of validation to make sure status one of the options in the array
        enum: ['interested', 'applied', 'interviewing', 'rejected', 'accepted'],
    },
});

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    applications: [applicationSchema],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
