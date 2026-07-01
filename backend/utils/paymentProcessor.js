const stripe = require('../config/stripe');

exports.processPayment = async (amount, source) => {
    return await stripe.charges.create({
        amount,
        currency: 'usd',
        source
    });
};
