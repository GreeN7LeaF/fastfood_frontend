// import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { createContext } from 'react';
import { ActiveContext } from "../../../Context/ActiveContext";
import classnames from "classnames";
import { NavItem, NavLink } from "reactstrap";
import { BiCaretRightCircle } from "react-icons/bi";
import "./FoodTypeCart.css";
export const FoodTypeIDContext = createContext();

export default function FoodTypeCart({ foodtype }) {
  let icon = `/images/icon/${foodtype.Image}`;
  const [typeID, setTypeID] = useState("");


  return (
    <>
      <FoodTypeIDContext.Provider value={foodtype.ID} />
      <NavItem
        onClick={() => handleShowFood()}
        className="nav_item_margin_top nav-item item"
      >
        <NavLink className="foodtype_cart_container foodType--active item-icon-box nav-link">
          <img className="foodtype_cart_image" src={icon} />
          <span className="foodType_cart_name">{foodtype.Name}</span>
          <BiCaretRightCircle className="foodType_cart_name_icon" />
        </NavLink>
      </NavItem>
    </>
  );
}
