const router = require('express').Router();
const CommentService = require('../Controllers/comment.controller');

router.route('/comments')
    .post(CommentService.createComment);

module.exports = router;