const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');
const authRequired = require('../middleware/authRequired')

router.get('/:id', ctrl.post.show);
router.get('/', ctrl.post.index);
router.post('/', authRequired, ctrl.post.create);
router.put('/:id', authRequired, ctrl.post.edit);
router.delete('/:id', authRequired, ctrl.post.deletePost);

module.exports = router;