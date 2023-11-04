import React from "react";
import FoodType from "../FoodType/FoodType";
import Food from "../Food/Food";
import "./Tab.css";

const Popups = () => {
  return (
    <div className="col-9 px-0">
      <FoodType />
      <Food />
    </div>
  );
};

export default Popups;
