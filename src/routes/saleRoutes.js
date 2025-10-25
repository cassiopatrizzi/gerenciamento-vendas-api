const express = require('express');
const router = express.Router();
const { registerSale, listSalesBySeller, listSalesByClient } = require('../controllers/saleController');
const { authenticate } = require('../middleware/authMiddleware');

router.post('/', authenticate('vendedor'), registerSale);
router.get('/seller', authenticate('vendedor'), listSalesBySeller);
router.get('/client', authenticate('cliente'), listSalesByClient);

module.exports = router;