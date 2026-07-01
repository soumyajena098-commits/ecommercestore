const User = require('../models/User');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    // Register logic
    res.json({ message: 'User registered' });
};

exports.login = async (req, res) => {
    // Login logic
    res.json({ token: 'mock-token' });
};
