const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');
const authRequired = require('../middleware/authRequired')


router.get('/', ctrl.posts.index);
router.get('/:id', ctrl.posts.show);
router.post('/', authRequired, ctrl.posts.create);
router.put('/:id', authRequired, ctrl.posts.edit);
router.delete('/:id', authRequired, ctrl.posts.deletePost);

module.exports = router;