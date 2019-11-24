var express = require('express');
var router = express.Router();

router.get('/', (req, res) => res.render('home'));

router.get('/login', (req, res) => res.render('login'));

router.get('/signin', (req, res) => res.render('signin'));

router.get('/resetpass', (req, res) => res.render('repass'));

router.get('/category', (req, res) => res.render('home'));

router.get('/category/category', (req, res) => res.render('home'));

router.get('/category/product', (req, res) => res.render('product'));

router.get('/vieworder', (req, res) => res.render('viewOrder'));

router.get('/vieworder/order', (req, res) => res.render('viewOrderDetail'));

module.exports = router;