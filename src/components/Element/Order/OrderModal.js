import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";

import { getOrderByID } from "../../../services/orderServices";

export const OrderModal = (props) => {
  const [show, setShow] = useState(props.show);

  //const [dataOrder, setDataOrder] = useState({});
  const [dataOrderDetails, setDataOrderDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const handleShowDetails = async () => {
      if (props.order) {
        const detailsData = await getOrderByID(props.order.ID);
        if (detailsData && detailsData.DT) {
          console.log(detailsData.DT);
          setDataOrderDetails(detailsData.DT);
          setIsLoading(false);
        } else {
          //error
          //console.log(detailsData.EM);
        }
      }
    };

    setIsLoading(true);
    console.log("o", props.order);
    handleShowDetails();
  }, [props.order]);

  return (
    <>
      <Modal
        size="lg"
        show={props.show}
        className="modal-user"
        onHide={props.onHide}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title className="title">Order #{props.order.ID}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {isLoading && <p>Đang tải dữ liệu...</p>}
          {true && (
            <div className="">
              <div className="form-list">
                <div className="table-wrapper mb-0 ">
                  <div className="row row-header">
                    <div className="col-5">Food Name</div>
                    <div className="col-3">Quantity</div>
                    <div className="col-4">Total</div>
                  </div>
                  <div className="seperate"></div>
                  <div className="table-body">
                    {dataOrderDetails &&
                      dataOrderDetails.map((detail, key) => (
                        <div key={key} className="row item-list">
                          <div className="col-5">
                            <div className="d-flex align-items-center">
                              <div className="">
                                <p className="mb-1">{detail.FoodName}</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-3">
                            <p className="fw-normal mb-1">{detail.Quantity}</p>
                          </div>
                          <div className="col-4">
                            {(detail.Quantity * detail.Price).toLocaleString(
                              "de-DE"
                            )}{" "}
                            <span>&#8363;</span>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
};
