import React, { useEffect, useState } from "react";

import { FoodByTypeData } from "../../../api/callApi";

export const MenuSection = ({ foodtype }) => {
  const [foods, setFoods] = useState([]);

  const getFoodDataTest = async () => {
    try {
      let data = await FoodByTypeData(foodtype.ID);
      if (data.EM.includes("Error")) {
        setFoods(FoodDT);
      } else {
        setFoods(data.DT);
        console.log(data.DT);
      }
    } catch (error) {
      setFoods(FoodDT);
    }
  };

  useEffect(() => {
    getFoodDataTest();
  }, [foodtype]);

  return (
    <>
      {foods.map((item, idx) => (
        <div key={idx} className=" mx-2 session-card float-start">
          <div className="item-img">
            <img
              src={
                item.Image !== null &&
                item.Image !== undefined &&
                item.Image !== "null"
                  ? item.Image
                  : "../images/default.jpg"
              }
              alt="food image"
            />
          </div>
          <div className="food-name">{item.Name}</div>
          <div className="food-price">
            {item.Price.toLocaleString("de-DE")}
            <sup className="price_contaier_currency">&#8363;</sup>
          </div>
        </div>
      ))}
    </>
  );
  //   <div id="SliderContainer" className="container">
  //     {foodType.map((item, idx) => (
  //       <div className="item-container">
  //         <div className="title menu-title">{item.Name}</div>
  //         <MenuList key={idx} foodtype={item} />
  //       </div>
  //     ))}
  //   </div>
  // );
};
