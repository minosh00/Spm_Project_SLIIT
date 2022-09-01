const Comment = require("../models/Comment");

const commentsController = {
  // Create Comment
  createComment: async (req, res) => {
    try {
      const { noOfStars, comment, userEmail, userPNumber, userImage } =
        req.body;

      const newComment = new Comment({
        noOfStars,
        comment,
        userEmail,
        userPNumber,
        userImage,
      });

      await newComment.save();
      res.json({ msg: "Comment added!" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  // Get all the comments
  getComments: async (req, res) => {
    try {
      const comments = await Comment.find();
      res.json(comments);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  // Get comment by ID
  getCommentByID: async (req, res) => {
    console.log(req.params.id)
    try {
      let id = req.params.id;
      const comment = await Comment.findById(id);
      res.json(comment);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = commentsController;
