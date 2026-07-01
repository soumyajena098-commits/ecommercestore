const express = require('express');
const router = express.Router();
const { getCart, updateCart } = require('../controllers/cartController');
const auth = require('../middleware/auth');

router.get('/', auth, getCart);
router.post('/', auth, updateCart);

module.exports = router;
