const Comment = require("../models/Comment");

const commentsController = {
  // Create Comment
  createComment: async (req, res) => {
    console.log('controller')
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
};

module.exports = commentsController;
