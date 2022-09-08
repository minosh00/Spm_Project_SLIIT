import React from "react";
import Rate from "../RateComponent/Rate";
import "./comment.css";

const Comment = ({ commentText, username, image, stars }) => {
  return (
    <div className="comment-container">
      <div className="comment-rating">
        <Rate initValue={stars} readOnly />
      </div>
      <div className="comment-card">
        <span className="comment-username">{username}</span>
        <span className="comment-image">{username.charAt(0).toUpperCase()}</span>
        <span className="comment-text">{commentText}</span>
      </div>
    </div>
  );
};

export default Comment;
