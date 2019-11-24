const express = require('express');
const router = express.Router();

router.get('/vieworder', (req, res) => res.render('viewOrder'));

router.get('/vieworder/order', (req, res) => res.render('viewOrderDetail'));

router.get('/viewcart', (req, res) => res.render('viewCart'));

router.get('/addorder', (req, res) => res.render('addCart'));

module.exports = router;