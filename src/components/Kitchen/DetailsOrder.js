import React, { useState, useEffect, useCallback } from "react";

import {
  getOrderByID,
  updateOrderStatusService,
} from "../../services/orderServices";
import { toast } from "react-toastify";

export const DetailsOrder = ({ order }) => {
  const [details, setDetails] = useState([]);
  const [orderCurr, setOrderCurr] = useState({});
  const [loading, setLoading] = useState(true);

  console.log("order: ", order);

  const getBillByID = async (id) => {
    try {
      let getOrder = await getOrderByID(id);
      console.log(getOrder);
      if (getOrder && getOrder.EC != -1) setDetails(getOrder.DT);
      setLoading(false);
    } catch (error) {
      setLoading(true);
      console.log("Cannot get details order");
    }
  };

  function checkOrderExistence(orderID) {
    const orders = JSON.parse(sessionStorage.getItem("ordersReady"));
    if (!orders) {
      return false; // session storage không tồn tại key "orders"
    }
    const orderIDs = orders.map((order) => order.ID);
    console.log(orderIDs.includes(orderID));
    return orderIDs.includes(orderID);
  }

  const addOrderToCompleted = (order) => {
    let data = updateOrderStatusService(order.ID);
    console.log("data: ", data);
    if (data && data.EC != -1) {
      toast.success(data.EM);
      setTimeout(() => {
        window.location.reload(); // Refresh the page after a delay
      }, 1000);
    } else {
      toast.error(data.EM);
    }
  };

  useEffect(() => {
    getBillByID(order.ID);
  }, [order]);

  return (
    <>
      <div className="details-header d-flex flex-row align-items-center">
        <div className="title">Order #{order.ID}</div>
        <button
          className="btn btn-clr-normal"
          onClick={() => addOrderToCompleted(order)}
        >
          Finished
        </button>
      </div>
      <div className="info mt-4">
        <div className="row form-list">
          <div className="col-8 table-wrapper">
            <div className="row row-header mb-4">
              <div className="col-8">Food Name</div>
              <div className="col-4">Quantity</div>
            </div>
            <div class="table-body">
              {/* loading spinner */}
              {loading && <div>Loading...</div>}
              {!loading &&
                details &&
                details.map((d, idx) => (
                  <div key={idx} className="row item-list my-4">
                    <div className="col-8">{d.FoodName}</div>
                    <div className="col-4">{d.Quantity}</div>
                  </div>
                ))}
            </div>
          </div>
          <div className="col-4 note-container">
            <div className="note-title">Note</div>
            <div className=""></div>
          </div>
        </div>
      </div>
      <div className="checkout text-start">
        {/* <div className="row">
          <div className="col-6 fs-5 my-auto px-4">Total: </div>
          <div className="col-6 order-total">{order.Total} </div>
        </div> */}
        {/* <div className="row mt-3 gap-2">
            <button className="col-5 btn btn-clr-normal">Clear</button>
            <button className="col-5 btn btn-clr-normal">Check Out</button>
          </div> */}
      </div>
    </>
  );
};
