const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');
const authRequired = require('../middleware/authRequired');

// Current Path
// '/api/v1/auth'

// POST Register Route
router.post('/register', ctrl.auth.register);
router.post('/login', ctrl.auth.login);
router.post('/logout', ctrl.auth.logout);
router.post('/verify', authRequired, ctrl.auth.verify);

module.exports = router;
