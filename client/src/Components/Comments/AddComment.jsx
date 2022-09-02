import React, { useState } from "react";
import RateComponent from "./RateComponent/Rate";
import InputField from "./InputFieldComponent/InputField";
import CommentButton from "./Button/CommentButton";
import TextArea from "./TextArea/TextArea";
import axios from "axios";

const AddComment = () => {
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [stars, setStars] = useState(0);

  const [emailError, setEmailError] = useState({ state: false, message: "" });
  const [commentError, setCommentError] = useState({
    state: false,
    message: "",
  });

  const handleAddComment = () => {
    if (comment === "") {
      setCommentError({ state: true, message: "You must fill this field" });
    }

    if (email === "") {
      setEmailError({ state: true, message: "You must fill this field" });
    } else {
      if (
        !!!email.match(
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        )
      ) {
        setEmailError({ state: true, message: "Please enter a valid email" });
      }
    }

    if (
      comment !== "" &&
      email !== "" &&
      !!email.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    ) {
      setCommentError({ message: "", state: false });
      setEmailError({ message: "", state: false });

      const payload = {
        noOfStars: stars,
        comment: comment,
        userEmail: email,
        userPNumber: "000003",
        userImage: "yuioyoieofsdfdgiteytuio",
      };

      axios
        .post("http://localhost:5000/api/comments", payload)
        .then((res) => {
          alert(res.msg);
          window.location.href = "/comments-section";
        })
        .catch((e) => console.error(e.message));
    }
  };

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div>
        <RateComponent onClick={(value) => setStars(value)} size="large" />
      </div>
      <div className="flex flex-col space-y-3">
        <InputField
          error={emailError.state}
          helperText={emailError.state && emailError.message}
          onChange={(text) => setEmail(text)}
          label="e-mail address"
        />
        <TextArea
          error={commentError.state}
          helperText={commentError.state && commentError.message}
          onChange={(text) => setComment(text)}
        />
        <CommentButton
          onClick={() => handleAddComment()}
          size="small"
          variant="contained"
        />
      </div>
    </div>
  );
};

export default AddComment;
