import axios from "axios";
import React, { useEffect, useState } from "react";
import CommentButton from "./Button/CommentButton";
import Comment from "./Comment/Comment";

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
    <div className="flex justify-center items-center px-10">
      <div className="flex justify-end items-end">
        <CommentButton label="Add Review" onClick={() => handleRedirect()} size="small" variant="contained" />
      </div>
      {comments.map((comment) => (
        <div className="my-4">
          <Comment
            commentText={comment.comment}
            image={comment.userImage}
            stars={comment.noOfStars}
            username={comment.userEmail}
            key={comment._id}
          />
        </div>
      ))}
    </div>
  );
};

export default CommentsSection;
