const Cart = require('../models/Cart');

exports.getCart = async (req, res) => {
    const cart = await Cart.findOne({ user: req.user.id });
    res.json(cart);
};

exports.updateCart = async (req, res) => {
    // Update cart logic
    res.json({ message: 'Cart updated' });
};
