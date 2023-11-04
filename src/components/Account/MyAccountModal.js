import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";

export const MyAccountModal = (props) => {
  const [show, setShow] = useState(props.show);

  const handleClose = () => {
    setShow(false);
    resetInfo();
  };

  useEffect(() => {}, [props.show]);

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
          <Modal.Title className="title">My Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
            <div className="">
              <div className="">Name: {props.user && props.user.Name}</div>
              <div className="">Account: {props.user && props.user.Email}</div>
              <div className="">Birth: {props.user && props.user.Birth}</div>
              <div className="">
                Gender:{" "}
                {props.user && props.user.Gender == 1 ? "Female" : "Male"}
              </div>
              <div className="">
                Address:{" "}
                {props.user && props.user.Address
                  ? props.user.Address
                  : "Empty content"}
              </div>
            </div>
          </>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};
