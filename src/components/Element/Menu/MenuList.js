import React, { useEffect, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { getFoodByTypeData } from "../../../services/foodServices";

export const MenuList = ({ foodtype }) => {
  const [foods, setFoods] = useState([]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const getFoods = async () => {
    let data = await getFoodByTypeData(foodtype.ID);
    setFoods(data);
  };

  useEffect(() => {
    getFoods();
  });

  return (
    <Slider {...settings}>
      {foods.map((food, idx) => (
        <div key={idx} className="card-wrapper" alt={`Slide ${idx + 1}`}>
          <div class="card-item d-flex flex-row">
            <div className="card-img">
              <img src="/images/product/pizza/pic1.jpg" alt="fried food" />
              <button className="order-btn btn btn-clr-normal">
                <div className="">Edit Food</div>
              </button>
            </div>
            <div className="card-info">
              <h5 className="card-name">{food.Name}</h5>
              <p className="price text-primary">
                {food.Price.toLocaleString("de-DE")}
                <sup>&#8363;</sup>
              </p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};
