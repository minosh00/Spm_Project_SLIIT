const router = require('express').Router();
const CommentService = require('../Controllers/comment.controller');

router.route('/comments')
    .get(CommentService.getComments)
    .post(CommentService.createComment);

router.route('/comments/:id')
    .get(CommentService.getCommentByID)
    .put(CommentService.updateComment)
    .delete(CommentService.deleteComment);

module.exports = router;