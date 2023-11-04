import React, { useState, useEffect } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Bell, Clock, ArrowBendDownLeft } from "phosphor-react";

import { DetailsOrder } from "./DetailsOrder";

export const Orders = ({ orderNewData }) => {
  const [orderPicked, setOrderPicked] = useState([]);

  const getOrder = (order) => {
    setOrderPicked(order);
    if (orderPicked) {
      console.log(orderPicked);
    }
  };

  useEffect(() => {}, [orderPicked]);

  return (
    <>
      <div className="main-header row">
        <div className="col left d-flex flex-row gap-3 align-items-center">
          <button className="btn btn-clr-normal">
            <ArrowBendDownLeft size={22} color="#ffffff" weight="fill" />
          </button>
          <div className="breadcumb d-flex flex-row gap-3 align-items-center">
            <div className="prev">Dashboard</div>
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
        <div className="col-4 bill-list">
          <div className="sub-header d-flex flex-row justify-between">
            <div className="big-title">Bill</div>
          </div>
          <div className="session-nav">All</div>
          <div className="session-bill row">
            {orderNewData &&
              orderNewData.map((order) => (
                <div
                  key={order.ID}
                  className="col-10 bill-item "
                  onClick={() => getOrder(order)}
                >
                  <div className="row">
                    <div className="col-7">
                      <div className=" d-flex flex-row align-items-center">
                        <div className="order-id me-3">Order {order.ID}</div>
                        <div className="order-status">{order.Status}</div>
                      </div>
                      <div className="">Quantity: {order.Quantity}</div>
                    </div>
                    <div className="col-5 text-end">
                      <div className="order-price">{order.Total}</div>
                      <div className="order-time">14:50</div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="details-list col px-lg-5">
          <div className="sub-header d-flex flex-row justify-between">
            <div className="big-title">Details</div>
          </div>

          <DetailsOrder order={orderPicked} />
        </div>
      </div>
    </>
  );
};
