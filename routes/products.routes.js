const express = require('express');
const router = express.Router();
const products = require('../controllers/products.controller');
const { authBearer } = require('../middlewares/auth.middlewares');

router.get('/', products.getProducts);
router.get('/:id', products.getProductById);
router.post('/', authBearer, products.createProduct);
router.put('/:id', authBearer, products.updateProduct);
router.delete('/:id', authBearer, products.deleteProduct);

module.exports = router;
