import axios from "axios";
import React, { useEffect, useState } from "react";
import CommentButton from "./Button/CommentButton";
import Comment from "./Comment/Comment";
<<<<<<< HEAD
import "./styles/CommentsSection.css";
=======
import "./styles/CommentsSection.css"
>>>>>>> 9ad8af8 (changed styles)

const CommentsSection = () => {
  const [comments, setComments] = useState([]);

  const getComments = () => {
    axios
      .get("http://localhost:5000/api/comments")
      .then((res) => {
        setComments(res.data);
        console.log(res.data);
      })
      .catch((e) => {
        console.error(e.message);
      });
  };

  const deleteComment = (id) => {
    axios
    .delete(`http://localhost:5000/api/comments/${id}`)
    .then((_res) => {
      alert('Done!');
      getComments();
    })
    .catch((e) => {
      alert('Cannot Delete!')
      console.error(e.message);
    });
  }

  useEffect(() => {
    getComments();
  }, []);

  const handleRedirect = () => {
    window.location.href = "/comments-section/create";
  };

  return (
    <div className="cs-background">
      <div className="cs-add-button">
<<<<<<< HEAD
        <CommentButton
          label="Add Review"
          onClick={() => handleRedirect()}
          size="small"
          variant="contained"
        />
      </div>
      {comments.map((comment) => (
        <div key={comment._id} className="cs-comment">
=======
        <CommentButton label="Add Review" onClick={() => handleRedirect()} size="small" variant="contained" />
      </div>
      {comments.map((comment) => (
        <div className="cs-comment">
>>>>>>> 9ad8af8 (changed styles)
          <Comment
            commentText={comment.comment}
            image={comment.userImage}
            stars={comment.noOfStars}
            username={comment.userEmail}
            key={comment._id}
            onDelete={() => deleteComment(comment._id)}
            onEdit={() => window.location.href = `/comments-section/edit/${comment._id}`}
          />
        </div>
      ))}
    </div>
  );
};

export default CommentsSection;
