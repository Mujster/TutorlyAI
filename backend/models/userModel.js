const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    isVerified: {type: Boolean, default: false},
    verificationToken: {type: String},
    verificationTokenExpires: {type: Date},
    token:{ type: String, required: true }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
