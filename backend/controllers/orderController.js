const Order = require('../models/Order');

exports.createOrder = async (req, res) => {
    const newOrder = new Order(req.body);
    await newOrder.save();
    res.json(newOrder);
};

exports.getOrders = async (req, res) => {
    const orders = await Order.find({ user: req.user.id });
    res.json(orders);
};
