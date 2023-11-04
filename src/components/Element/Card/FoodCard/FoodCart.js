import React, { useState, useEffect, useContext, useReducer } from "react";
import { OrderContext } from "../../../Context/OrderContext";

import { TabPane, NavLink } from "reactstrap";
import { FoodByTypeData } from "../../../../api/callApi";
//import { FoodDT } from "../../../../api/tempApi";

export default function FoodCart({ foodtype }) {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  const { addToOrder } = useContext(OrderContext);

  const getFoodDataTest = async () => {
    try {
      let data = await FoodByTypeData(foodtype.ID);
      if (data.EM.includes("Error")) {
        setFoods(FoodDT);
        setLoading(false);
      } else {
        console.log(data.DT);
        setFoods(data.DT);
      }
    } catch (error) {
      setFoods(FoodDT);
    }
  };

  useEffect(() => {
    getFoodDataTest();
  }, [loading]);

  return (
    <TabPane
      className="food-list"
      tabId={foodtype.ID}
      style={{ overflowY: "scroll" }}
    >
      {foods.map((food, idx) => {
        return (
          <div
            key={idx}
            className=" mx-2 food-card float-start"
            onClick={() => addToOrder(food)}
          >
            <div className="food-img">
              <img
                src={
                  food.Image !== null &&
                  food.Image !== undefined &&
                  food.Image !== "null"
                    ? food.Image
                    : "../images/default.jpg"
                }
                alt="food image"
              />
            </div>
            <div className="food-name">{food.Name}</div>
            <div className="food-price">{food.Price}</div>
          </div>
        );
      })}
    </TabPane>
  );
}
