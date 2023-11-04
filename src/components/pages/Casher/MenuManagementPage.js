import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Bell, Clock, ArrowBendDownLeft } from "phosphor-react";

import { MenuSection } from "../../Element/Menu/MenuSection";
import { getFoodTypeService } from "../../../services/foodTypeServices";
import { footypeHardApi } from "../../../api/tempAPI";

export const MenuManagementPage = () => {
  const [FoodType, setFoodType] = useState([]);
  const [foodTypePicked, setFoodTypePicked] = useState({});
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);

  const getFoodTypeData = async () => {
    let data = [];
    try {
      data = await getFoodTypeService();
      console.log(data.DT);
      if (data && data.DT) {
        setFoodType(data.DT);
      }
    } catch (error) {
      setFoodType(footypeHardApi);
    }
  };

  const getFT = (ft) => {
    setLoading(true);
    setSelected(ft);
    setFoodTypePicked(ft);
    setLoading(false);
  };

  useEffect(() => {
    getFoodTypeData();
  }, [foodTypePicked]);
  return (
    <div id="myMain">
      <div className="main-header row">
        <div className="col left d-flex flex-row gap-3 align-items-center">
          <button className="btn btn-clr-normal">
            <ArrowBendDownLeft size={22} color="#ffffff" weight="fill" />
          </button>
          <div className="breadcumb d-flex flex-row gap-3 align-items-center">
            <Link to="/" className="prev">
              Dashboard
            </Link>
            <div className="curr">Sales statistics</div>
          </div>
        </div>
        <div className="col right d-flex flex-row gap-3 align-items-center">
          <div className="noti">
            <Bell size={30} color="#3a3a3a" weight="fill" />
          </div>
          <div className="time">
            <Clock size={30} color="#3a3a3a" weight="fill" />
          </div>
          <div className="search">
            <i className="fa fa-search"></i>
            <input type="text" />
          </div>
        </div>
      </div>
      <div className="main-body row">
        <div className="col-2 container-list">
          <div className="sub-header d-flex flex-row justify-between">
            <div className="big-title">Categories</div>
          </div>
          <div className="session-list">
            {FoodType &&
              FoodType.map((item, idx) => (
                <div
                  key={idx}
                  className={`list-item text-center d-flex flex-row align-items-center ${
                    selected === item ? "active" : ""
                  }`}
                  onClick={() => getFT(item)}
                >
                  <div className="img-container">
                    <img src={`/images/icon/${item.Image}`} />
                  </div>
                  <div className="ms-3">{item.Name}</div>
                </div>
              ))}
          </div>
        </div>
        <div className="details-list col px-lg-5">
          <div className="sub-header d-flex flex-row justify-between">
            <div className="big-title">Menu</div>
          </div>
          <div className="session-list">
            <MenuSection foodtype={foodTypePicked} />
          </div>
        </div>
      </div>
    </div>
  );
};
