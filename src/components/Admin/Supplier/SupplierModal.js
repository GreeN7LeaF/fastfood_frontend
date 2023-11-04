import React, { useEffect, useState } from "react";
import "../css/main.css";
import "../css/root.css";
import "./Supplier.css";
import { Modal, Button } from "react-bootstrap";
import "../Production/Production.css";
import Form from "react-bootstrap/Form";
import { AddFood } from "../../../services/foodServices";
import {
  InsertSupplier,
  updateFoodType,
  updateVendors,
} from "../../../api/callApi";
import { toast } from "react-toastify";
//name, contact, note
const SupplierModal = (props) => {
  const contact = props.contact;
  const note = props.note;

  const handleCreate = async () => {
    try {
      const regex = /^[0-9]{10}$/;
      if (!regex.test(props.contact)) {
        toast.error("Invalid phone number");
      } else {
        let data = await InsertSupplier(props.name, props.contact, props.note);
        if (data && +data.EC == 1) {
          toast.success(data.EM);
          handleClose();
        }
        if (data && +data.EC == 0) {
          toast.error(data.EM);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleClose = () => {
    props.setShowModal(false);
  };
  const handleShow = () => props.setShowModal(true);

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (props.data) {
      const data = await updateVendors(props.idSup, {
        ...props.data,
        contact,
        note,
      });
      if (data && +data.EC == 1) {
        toast.success(data.EM);
        props.setShowModal(false);
      }
      if (data && +data.EC != 1) {
        toast.error(data.EM);
      }
    }
  };

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
          <Modal.Title className="title">
            {props.action == "CREATE" ? "Create Supplier" : "Update Supplier"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="create-form">
            <div className="row mb-4">
              <div className="col col-12">
                <div className="form-outline">
                  <input
                    type="text"
                    id="form6Example1"
                    className="form-control"
                    disabled={props.action == "CREATE" ? "" : "disabled"}
                    value={props.name}
                    onChange={(e) => props.setName(e.target.value)}
                  />
                  <label className="form-label" htmlFor="form6Example1">
                    Name
                  </label>
                </div>
              </div>
              <div className="col">
                <div className="form-outline">
                  <input
                    type="text"
                    id="form6Example1"
                    className="form-control"
                    value={props.contact}
                    onChange={(e) => props.setContact(e.target.value)}
                  />
                  <label className="form-label" htmlFor="form6Example1">
                    Contact
                  </label>
                </div>
              </div>
              <div className="col col-12 note-container-supplier">
                <div className="form-outline">
                  <input
                    type="text"
                    id="form6Example1"
                    className="form-control"
                    value={props.note}
                    onChange={(e) => props.setNote(e.target.value)}
                  />
                  <label className="form-label" htmlFor="form6Example1">
                    note
                  </label>
                </div>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            className=""
            variant="primary"
            onClick={
              props.action == "CREATE"
                ? (e) => handleCreate(e)
                : (e) => handleUpdate(e)
            }
          >
            {props.action == "CREATE" ? "CREATE" : "UPDATE"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SupplierModal;
