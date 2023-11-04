import React, { useState } from "react";
import "./Feedback.css";
import { createFeedBack } from "../../api/callApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const FeedBack = (props) => {
  const [name, setName] = useState("");
  const [contact, setcontact] = useState("");
  const [content, setcontent] = useState("");
  const navigate = useNavigate();

  const handleSubmitFeedBack = async () => {
    try {
      let data = await createFeedBack(name, contact, content);
      if (data && +data.EC == 1) {
        toast.success("Submit feedback success");
        navigate("/feedback/thanks");
      }
      if (data && +data.EC != 1) {
        {
          toast.error("Submit feedback failed");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="feedBack_container">
      <label className="feedBack_label_input">Name</label>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        className="feedBackinput"
      />
      <label className="feedBack_label_input">Contact</label>
      <input
        value={contact}
        onChange={(e) => setcontact(e.target.value)}
        placeholder="Contact"
        className="feedBackinput"
      />
      <label className="feedBack_label_input">Content</label>
      <input
        value={content}
        onChange={(e) => setcontent(e.target.value)}
        placeholder="Content..."
        className="feedBackinput content"
      />
      <button
        onClick={() => handleSubmitFeedBack()}
        className="submit_feedback_btn"
      >
        SUBMIT
      </button>
    </div>
  );
};

export default FeedBack;
