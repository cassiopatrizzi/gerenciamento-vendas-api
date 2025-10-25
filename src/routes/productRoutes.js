const express = require('express');
const router = express.Router();
const { registerProduct, listProducts, getProduct, deleteProduct } = require('../controllers/productController');
const { authenticate } = require('../middleware/authMiddleware');


router.post('/', authenticate('vendedor'), registerProduct);
router.get('/', authenticate(), listProducts);
router.get('/:id', authenticate(), getProduct);
router.delete('/:id', authenticate('vendedor'), deleteProduct);

module.exports = router;