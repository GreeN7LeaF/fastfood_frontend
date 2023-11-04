import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { toast } from "react-toastify";

import { checkOutOrder } from "../../../api/callApi";
import { addNewOrder } from "../../../services/orderServices";

export const CheckoutModal = (props) => {
  const [method, setMethod] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const checkOut = async () => {
    console.log("total: ", props.total);
    if (props.total != 0) {
      const res = await checkOutOrder(props.total);
      if (res && +res.EC == 1) {
        location.href = res.DT;
        localStorage.setItem(
          "order",
          JSON.stringify({
            StaffID: props.userId,
            BillDetails: props.orderList,
          })
        );
        toast.success("Order completed successfully");
      }
    }
  };

  const addOrderToDB = async () => {
    const orderDetailsData = props.orderList;
    console.log("orderDetailsData: ", orderDetailsData);
    if (orderDetailsData.length == 0) {
      toast.error("Order không thể rỗng. Thêm thất bại");
      return;
    }

    const res = await addNewOrder({
      StaffID: 1,
      BillDetails: orderDetailsData,
    });
    switch (res.EC) {
      case 0:
        alert(res.EM);
        break;
      case 1:
        toast.success("Order completed successfully");
        break;
      case -1:
        toast.error("Error at api");
        break;
      case -2:
        toast.error("Error at services");
        break;
      default:
      // alert("Try again");
    }
  };

  const handleCheckout = () => {
    console.log(method);
    if (method != "" && props.orderList.length > 0) {
      console.log("method: ", method);
      switch (method) {
        case "momo":
          checkOut();
          break;
        case "cash":
          addOrderToDB();
          break;
      }
      setIsModalOpen(false);
    }
    return;
  };

  useEffect(() => {
    setIsModalOpen(props.show);
  }, [props.show]);

  return (
    <>
      <Modal
        size="lg"
        show={isModalOpen}
        className="modal-user"
        onHide={props.onHide}
        centered
        id="paying-method"
      >
        <Modal.Header closeButton>
          {/* <Modal.Title className="title">Create Staff</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          <div className="row gap-3 text-center">
            <div
              className={
                method == "momo"
                  ? "col paying-btn paying-momo active"
                  : "col paying-btn paying-momo "
              }
              onClick={() => setMethod("momo")}
            >
              <div className="paying-type">MoMo</div>
              <div className="paying-img"></div>
            </div>
            <div
              className={
                method == "cash"
                  ? "col paying-btn paying-cash active"
                  : "col paying-btn paying-cash "
              }
              onClick={() => setMethod("cash")}
            >
              <div className="paying-type">Cash</div>
              <div className="paying-img"></div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="" variant="primary" onClick={handleCheckout}>
            Select
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
