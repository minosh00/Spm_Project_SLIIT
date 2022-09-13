import React, { useState } from "react";
import RateComponent from "./RateComponent/Rate";
import InputField from "./InputFieldComponent/InputField";
import CommentButton from "./Button/CommentButton";
import TextArea from "./TextArea/TextArea";
import axios from "axios";

const AddComment = () => {

    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');
    const [stars, setStars] = useState(0);

  const handleAddComment = () => {
    window.location.href = "/comments-section";

    axios
      .post('http://localhost:5000/api/comments', {})
      .then((res) => alert(res.msg))
      .catch((e) => console.error(e.message));
  };

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div>
        <RateComponent onClick={(value) => console.log(value)} size="large" />
      </div>
      <div className="flex flex-col space-y-3">
        <InputField onChange={setEmail} label="e-mail address" />
        <TextArea onChange={setComment} />
        <CommentButton onClick={() => handleAddComment()} size="small" variant="contained" />
      </div>
    </div>
  );
};

export default AddComment;
