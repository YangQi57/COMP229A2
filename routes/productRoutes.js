const express = require('express');
const controller = require('../controllers/productController');

const router = express.Router();

router.get('/api/products/published', controller.getPublishedProducts);
router.get('/api/products', controller.getProductsByName);
router.get('/api/products', controller.getProducts);
router.get('/api/products/:id', controller.getProductById);
router.post('/api/products', controller.createProduct);
router.put('/api/products/:id', controller.updateProductById);
router.delete('/api/products/:id', controller.deleteProductById);
router.delete('/api/products', controller.deleteAllProducts);


module.exports = router;


