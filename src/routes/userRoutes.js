const express = require('express');
const router = express.Router();
const { getProgress, getClientData, getClientDataById } = require('../controllers/clientController');
const { authenticate } = require('../middleware/authMiddleware');


router.get('/progress', authenticate('cliente'), getProgress);
router.get('/data', authenticate('administrador', 'cliente'), getClientData);
router.get('/data/:id', authenticate('administrador', 'vendedor'), getClientDataById);

module.exports = router;