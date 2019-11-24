const express = require('express');
const router = express.Router();

//index 
router.get('/', (req, res) => res.render('category_index'));

router.get('/categories', (req, res) => res.render('category_index')); //index

router.get('/categories/category', (req, res) => res.render('category_index')); //show by id-- chua truyen id

router.get('/categories/create', (req, res) => res.render('category_edit')); //create

router.get('/categories/category/edit', (req, res) => res.render('category_edit')); //edit

//seller
router.get('/sellers', (req, res) => res.render('seller_index')); //index

router.get('/sellers/seller', (req, res) => res.render('seller_index')); //show by id --chua truyen id

//user
router.get('/users', (req, res) => res.render('user_index')); //index

router.get('/users/user', (req, res) => res.render('user_index')); //show

//product
router.get('/products', (req, res) => res.render('product_index', {
    admin: true,
})); //index

router.get('/products/product', (req, res) => res.render('product_index', {
    admin: true,
})); //show by id-- chua truyen id

router.get('/products/create', (req, res) => res.render('product_edit')); //create

router.get('/products/product/edit', (req, res) => res.render('product_edit')); //edit

module.exports = router;