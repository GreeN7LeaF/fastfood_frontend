import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Modal, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";
import { AddFood } from "../../../services/foodServices";
import "../css/main.css";
import "../css/root.css";
import "./Production.css";
import { updateFood } from "../../../api/callApi";

const ProductModal = (props) => {
  const handleClose = () => props.setShowModal(false);
  const name = props.name;
  const image = props.image;
  const price = props.price;
  const status = props.status;
  const recipe = props.recipe;
  const type = props.type;

  const handleCreateFood = async (e) => {
    e.preventDefault();
    if (isNaN(props.price)) {
      toast.error("Invalid price");
    } else {
      const data = await AddFood(
        props.name,
        props.price,
        props.image || "",
        props.type || 2,
        props.recipe || ""
      );
      if (data && +data.EC == 1) {
        toast.success(data.EM);
        handleClose();
      } else if (data && +data.EC != 1) {
        toast.error(data.EM);
        console.log(data);
      } else {
        toast.error("add data failed");
      }
    }
  };

  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    const data = await updateFood(props.id, {
      ...props.dataFood,
      name,
      image,
      price,
      type,
      status,
      recipe,
    });
    if (data && +data.EC == 1) {
      toast.success(data.EM);
      props.setShowModal(false);
    }
    if (data && +data.EC != 1) {
      toast.error(data.EM);
    }
  };

  useEffect(() => {
    console.log(name);
  }, [image, price, recipe, status]);

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
            {props.action == "CREATE" ? "CREATE PRODUCT" : "UPDATE PRODUCT"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="create-form">
            <div className="row mb-4">
              <div className="col">
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
                    Product Name
                  </label>
                </div>
              </div>
              <div className="col">
                <div className="form-outline">
                  <select
                    className="select w-100"
                    value={props.type}
                    onChange={(e) => props.setType(e.target.value)}
                  >
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                    <option value="5">Five</option>
                    <option value="6">Six</option>
                    <option value="7">Seven</option>
                    <option value="8">Eight</option>
                  </select>
                  <label className="form-label" htmlFor="inlineFormSelectPref">
                    Category
                  </label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="form6Example3"
                    className="form-control"
                    value={props.recipe}
                    onChange={(e) => props.setRecipe(e.target.value)}
                  />
                  <label className="form-label" htmlFor="form6Example3">
                    Recipe
                  </label>
                </div>
              </div>
              <div className="col-4">
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="form6Example4"
                    className="form-control"
                    value={props.status}
                    onChange={(e) => props.setStatus(e.target.value)}
                  />
                  <label className="form-label" htmlFor="form6Example4">
                    status
                  </label>
                </div>
              </div>
              <div className="col-4">
                <div className="form-outline mb-4">
                  <input
                    id="form6Example5"
                    className="form-control"
                    value={props.price}
                    onChange={(e) => props.setPrice(e.target.value)}
                  />
                  <label className="form-label" htmlFor="form6Example5">
                    Price
                  </label>
                </div>
              </div>
            </div>

            <div className="form-outline mb-4">
              <textarea
                className="form-control"
                id="form6Example7"
                rows="4"
                value={props.note}
                onChange={(e) => props.setNote(e.target.value)}
              ></textarea>
              <label className="form-label" htmlFor="form6Example7">
                note
              </label>
            </div>
            <div className="form-outline mb-4">
              <div className=" default-img-wrapper">
                <input
                  type="file"
                  hidden
                  name="chooseFile"
                  id="chooseFile"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    const reader = new FileReader();
                    reader.onload = () => {
                      props.setImage(reader.result);
                    };
                    reader.readAsDataURL(file);
                  }}
                />
                <div className="chooseFile_container">
                  <label
                    className={
                      image
                        ? "image_label_add_product active"
                        : "image_label_add_product"
                    }
                    htmlFor="chooseFile"
                  >
                    Choose a file
                  </label>
                  {image && <img src={image} alt="" />}
                </div>
              </div>
            </div>
            <div className="form-check d-flex mb-4">
              <input className="form-check-input me-2" id="form6Example8" />
              {props.action == "CREATE" && (
                <label className="form-check-label" htmlFor="form6Example8">
                  Create a food
                </label>
              )}
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
            onClick={(e) =>
              props.action == "CREATE"
                ? handleCreateFood(e)
                : handleUpdateProduct(e)
            }
          >
            {props.action == "CREATE" ? "Create" : "Update"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProductModal;
