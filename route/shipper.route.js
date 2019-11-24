const express = require('express');
const router = express.Router();

router.get('/vieworder', (req, res) => res.render('viewOrder'));

router.get('/vieworder/order', (req, res) => res.render('viewOrderDetail'));


module.exports = router;