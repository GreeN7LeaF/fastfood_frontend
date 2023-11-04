import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { CasherSideBar } from "../../Layout/SideMenu/SideBar";
import { OrderSubHeader } from "../../Layout/Header";
import { Link } from "react-router-dom";
import { Bell, Clock, ArrowBendDownLeft } from "phosphor-react";

import { OrderList } from "./OrderList";

export const OrderManagement = () => {
  const [date, setDate] = useState(new Date());
  const [activeIndex, setActiveIndex] = useState(0);
  const [orderListType, setOrderListType] = useState("all");

  function tick() {
    setDate(new Date());
  }

  useEffect(() => {
    // time
    const timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  }, []);

  return (
    <div id="myMain" className="scrolly">
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
          <div className="clock">{date.toLocaleTimeString()}</div>
        </div>
      </div>
      <div className="content py-3 px-5">
        <div className="title fs-2 text-capitalize">{orderListType} Orders</div>
        <div className="order-sub-header d-flex flex-row my-3">
          <div
            onClick={() => {
              setActiveIndex(0);
              setOrderListType("all");
            }}
            className={
              activeIndex === 0 ? "nav-link mx-3 active" : "nav-link mx-3"
            }
          >
            All Orders
          </div>
          <div
            onClick={() => {
              setActiveIndex(1);
              setOrderListType("proccessing");
            }}
            className={
              activeIndex === 1 ? "nav-link mx-3 active" : "nav-link mx-3"
            }
          >
            Processing
          </div>
          <div
            onClick={() => {
              setActiveIndex(2);
              setOrderListType("completed");
            }}
            className={
              activeIndex === 2 ? "nav-link mx-3 active" : "nav-link mx-3"
            }
          >
            Completed
          </div>
          <div
            to={"/casher/"}
            onClick={() => {
              setActiveIndex(3);
            }}
            className={
              activeIndex === 3 ? "nav-link mx-3 active" : "nav-link mx-3"
            }
          >
            Cancelled
          </div>
        </div>
        <OrderList type={orderListType} />
      </div>
    </div>
  );
};
