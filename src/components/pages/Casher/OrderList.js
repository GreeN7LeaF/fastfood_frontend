import React, { useState, useEffect } from "react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import { HashLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";

import { OrderModal } from "../../Element/Order/OrderModal";
import { toast } from "react-toastify";
import "./order.css";
import {
  getAllOrder,
  getOrderProcessing,
  getOrderCompleted,
  deleteOrderByID,
} from "../../../services/orderServices";

export const OrderList = (props) => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  //order choosen to show details (order modal)
  const [orderChoosen, setOrderChoosen] = useState({});

  const getAllOrderData = async () => {
    let data = [];
    try {
      data = await getAllOrder();
      setOrders(data.DT);
    } catch (error) {
      console.log(error.message);
      return [];
    } finally {
      setIsLoading(false);
    }
  };

  const getOrderProcessingData = async () => {
    let data = [];
    try {
      data = await getOrderProcessing();
      setOrders(data.DT);
    } catch (error) {
      console.log(error.message);
      return [];
    } finally {
      setIsLoading(false);
    }
  };

  const getOrderCompletedData = async () => {
    let data = [];
    try {
      data = await getOrderCompleted();
      setOrders(data.DT);
    } catch (error) {
      console.log(error.message);
      return [];
    } finally {
      setIsLoading(false);
    }
  };

  const handleSetOrderListData = () => {
    switch (props.type) {
      case "all":
        console.log("getting all orders...");
        getAllOrderData();
        break;
      case "proccessing":
        console.log("getting proccessing orders...");
        getOrderProcessingData();
        break;
      case "completed":
        console.log("getting completed orders...");
        getOrderCompletedData();
        break;
      default:
        break;
    }
  };

  const handleDeleteOrder = async (id) => {
    let data = [];
    try {
      data = await deleteOrderByID(id);
      if (data && data.EC != -1) {
        toast.success("Delete order successfully");
        handleSetOrderListData(); // Refresh the page after a delay
      } else {
        toast.error(data.EM);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const [showModal, setShowModal] = useState(false);
  const handleShowModal = (orderItem) => {
    let flag = !showModal;
    //if choosen then show modal details
    orderItem && setOrderChoosen(orderItem);
    setShowModal(flag);
  };

  useEffect(() => {
    setIsLoading(true);
    handleSetOrderListData();
  }, [props.type]);

  if (isLoading) {
    return <p>Đang tải dữ liệu...</p>; // Hiển thị thông báo đang tải
  }

  return (
    <div className="">
      <div className="form-list">
        <div className="table-wrapper mb-0 ">
          <div className="row row-header">
            <div className="col-2">ID</div>
            <div className="col-3">Date</div>
            <div className="col-2">Quantity</div>
            <div className="col-2">Total</div>
            <div className="col-3">Actions</div>
          </div>
          <div className="seperate"></div>
          <div className="table-body">
            {!isLoading &&
              orders &&
              orders.map((order, key) => {
                return (
                  <div key={key} className="row item-list">
                    <div className="col-lg-2">
                      <div className="d-flex align-items-center">
                        <div className="">
                          <p className="mb-1">{order.ID}</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <p className="fw-normal mb-1">{order.Date}</p>
                    </div>
                    <div className="col-lg-2">{order.Quantity}</div>
                    <div className="col-lg-2">
                      {order.Total.toLocaleString("de-DE")} <span>&#8363;</span>
                    </div>
                    <div className="col-lg-3">
                      <div className="d-flex flex-row gap-1">
                        <a className="nav-link">
                          <CiEdit
                            className="edit-icon"
                            id={order.ID}
                            onClick={() => handleShowModal(order)}
                          />
                        </a>
                        <a href="#" className="nav-link">
                          <AiOutlineDelete
                            className="del-icon"
                            id={order.ID}
                            onClick={() => handleDeleteOrder(order.ID)}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <OrderModal
        show={showModal}
        order={orderChoosen}
        onHide={handleShowModal}
      />
    </div>
  );
};
