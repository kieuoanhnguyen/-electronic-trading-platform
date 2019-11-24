const express = require('express');
const router = express.Router();

//product
router.get('/products', (req, res) => res.render('product_index')); //index

router.get('/products/product', (req, res) => res.render('product_index')); //show by id-- chua truyen id

router.get('/products/create', (req, res) => res.render('product_edit')); //create

router.get('/products/product/edit', (req, res) => res.render('product_edit')); //edit

router.get('/vieworder', (req, res) => res.render('viewOrder'));

router.get('/vieworder/order', (req, res) => res.render('viewOrderDetail'));

module.exports = router;