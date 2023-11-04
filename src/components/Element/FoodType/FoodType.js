import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import FoodTypeCart from "../Card/FoodTypeCart/FoodTypeCart";
import { Nav } from "reactstrap";
import { getFoodTypeService } from "../../../services/foodTypeServices";
import "./FoodType.css";
import { FoodTypeIDContext } from "../Card/FoodTypeCart/FoodTypeCart";
import { NavItem, NavLink } from "reactstrap";
import { BiCaretRightCircle } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import "../Card/FoodTypeCart/FoodTypeCart.css";
import { FoodData } from "../../../api/callApi";
import { FoodByTypeData } from "../../../api/callApi";

import { OrderContext } from "../../Context/OrderContext";

export default function FoodType() {
  const [FoodType, setFoodType] = useState([]);
  const [idType, setidType] = useState("");
  const foodTypeID = useContext(FoodTypeIDContext);
  const { addToOrder } = useContext(OrderContext);
  const [foodList, setFoodList] = useState([]);

  const getFoodTypeData = async () => {
    let data = [];
    try {
      data = await getFoodTypeService();
      console.log("food type: ", data);
      setFoodType(data.DT);
    } catch (error) {
      setFoodType(FoodTypeDT);
    }
  };

  const handleShowFood = async (id) => {
    if (id) {
      const data = await FoodByTypeData(id);
      if (data && +data.EC == 1) {
        setFoodList(data.DT);
      }
    }
  };

  useEffect(() => {
    getFoodTypeData();
  }, []);

  return (
    <>
      <div className="food_feed_container">
        <div className="row">
          {foodList.map((food, idx) => (
            <div key={idx} className="col col-3 food_feed_item_container">
              <div className="image_food_feed">
                <img
                  src={
                    food.Image !== null &&
                    food.Image !== undefined &&
                    food.Image !== "null"
                      ? food.Image
                      : "../images/default.jpg"
                  }
                />
              </div>
              <h4 className="food_feed_item_name">{food.Name}</h4>
              <p className="food_feed_item_price">
                {food.Price.toLocaleString("de-DE")}
                <sup className="price_contaier_currency">&#8363;</sup>
              </p>
              <div className="food_feed_add_cart_btn">
                <AiOutlinePlus
                  className="food_feed_add_cart_btn--icon"
                  onClick={() => addToOrder(food)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div tabs className="casher-nav">
        <Link to="/casher" className="back-link">
          {" "}
          {"< Casher"}
        </Link>
        {FoodType &&
          FoodType.map((foodtype, idx) => {
            let icon = `/images/icon/${foodtype.Image}`;
            return (
              <NavItem
                key={idx}
                onClick={() => handleShowFood(foodtype.ID)}
                className="nav_item_margin_top nav-item item"
              >
                <NavLink className="foodtype_cart_container item-icon-box nav-link">
                  <img className="foodtype_cart_image" src={icon} />
                  <span className="foodType_cart_name">{foodtype.Name}</span>
                  <BiCaretRightCircle className="foodType_cart_name_icon" />
                </NavLink>
              </NavItem>
            );
          })}
      </div>
    </>
  );
}
