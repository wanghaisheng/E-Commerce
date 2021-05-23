const express = require('express');
const router = express.Router();

const productController = require('../controllers/Product');


router.post('/api/products/addProduct',productController.addProduct);

router.get('/api/products/featuredProducts',productController.getFeaturedProducts);



module.exports = router;