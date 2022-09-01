const router = require('express').Router();
const CommentService = require('../Controllers/comment.controller');

router.route('/comments')
    .get(CommentService.getComments)
    .post(CommentService.createComment);

module.exports = router;