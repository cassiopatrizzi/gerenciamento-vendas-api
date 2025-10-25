const express = require('express');
const router = express.Router();
const { register, login, deleteUser } = require('../controllers/authController');
const { authenticate } = require('../middleware/authMiddleware');


router.post('/register', register);
router.post('/login', login);
router.delete('/user/:id', authenticate('vendedor'), deleteUser);

module.exports = router;