import React, { useContext, useEffect, useState } from "react";
import { AddNewOrderData } from "../../../api/callApi";
import { OrderPaymentContext } from "./Order";
import { Link, useNavigate } from "react-router-dom";
function OrderComplete(props) {
  const pathname = window.location.pathname;
  const navigate = useNavigate();
  let dataOrderRaw = localStorage.getItem("order");
  let dataOrder = JSON.parse(dataOrderRaw);
  let order = {
    StaffID: dataOrder.StaffID,
    BillDetails: dataOrder.BillDetails,
  };
  const addOrder = async () => {
    try {
      const data = await AddNewOrderData(order);
      localStorage.removeItem("order");
    } catch (error) {
      console.log(error);
    }
  };
  addOrder();

  return (
    <div>
      <Link to="/casher/makeOrder">Trở về</Link>
      Đặt hàng thành công!
    </div>
  );
}

export default OrderComplete;
