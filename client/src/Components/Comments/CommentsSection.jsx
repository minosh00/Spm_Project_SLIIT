import axios from "axios";
import React, { useEffect, useState } from "react";
import CommentButton from "./Button/CommentButton";
import Comment from "./Comment/Comment";
import "./styles/CommentsSection.css"

const CommentsSection = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    console.log(localStorage.getItem("user"))
    axios
      .get("http://localhost:5000/api/comments")
      .then((res) => {
        setComments(res.data);
        console.log(res.data);
      })
      .catch((e) => {
        console.error(e.message);
      });
  }, []);

  const handleRedirect = () => {
    window.location.href = '/comments-section/create'
  }

  return (
    <div className="cs-background">
      <div className="cs-add-button">
        <CommentButton label="Add Review" onClick={() => handleRedirect()} size="small" variant="contained" />
      </div>
      {comments.map((comment) => (
        <div className="cs-comment">
          <Comment
            commentText={comment.comment}
            image={comment.userImage}
            stars={comment.noOfStars}
            username={comment.userEmail.split("@")[0]}
            key={comment._id}
          />
        </div>
      ))}
    </div>
  );
};

export default CommentsSection;
