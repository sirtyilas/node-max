const path = require('path');

const express = require('express');

const productController = require('../controllers/product')

const router = express.Router();
// get home route 
router.get('/', productController.getShopProduct );

module.exports = router;
