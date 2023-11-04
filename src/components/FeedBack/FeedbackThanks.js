import React from "react";
import { useNavigate } from "react-router-dom";

const FeedbackThanks = (props) => {
  const navigate = useNavigate();
  const handleGobackhomepage = () => {
    setTimeout(() => {
      navigate("/feedback");
    }, 5000);
  };

  handleGobackhomepage();
  
  return (
    <div className="feedbackthankscontainer">
      <h1 className="feedbackthankscontainer_heading">
        Thanks for your feedback
      </h1>
    </div>
  );
};

export default FeedbackThanks;
