const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');
const authRequired = require('../middleware/authRequired')


router.get('/', ctrl.posts.index);
router.get('/', ctrl.posts.show);
// router.get('/:id', ctrl.posts.show);
router.post('/', authRequired, ctrl.posts.create);
router.put('/:id', authRequired, ctrl.posts.edit);
router.put('/:postId/comments', authRequired, ctrl.comments.create);
router.delete('/:postId/comments/:commentId', authRequired, ctrl.comments.deleteComment);
router.delete('/:id', authRequired, ctrl.posts.deletePost);

module.exports = router;