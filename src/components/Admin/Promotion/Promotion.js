import React, { useEffect, useState } from "react";
import "../css/main.css";
import "../css/root.css";
import {
  getAllPromotion,
  removePromotion,
  InsertPromotion,
} from "../../../services/promotion";
import "./Promotion.css";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { IoIosAdd } from "react-icons/io";
import { toast } from "react-toastify";

function formatDate(date) {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
}

const Promotion = (props) => {
  const [promotion, setPromotion] = useState([]);
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [status, setStatus] = useState(1);
  const [dateStart, setDateStart] = useState("");
  const [dateExp, setDateExp] = useState("");
  const [showAdd, setShowAdd] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchPromotion = async () => {
    try {
      const dataPromotion = await getAllPromotion();
      setPromotion(dataPromotion.DT);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeletePromotion = async (id) => {
    let data = removePromotion(id);
    if (data && +data.EC === 1) {
      toast.success(data.EM);
    }
    if (data && +data.EC != 1) {
      toast.error(data.EM);
    }
  };

  const handleInsertPromotion = async (e) => {
    e.preventDefault();
    try {
      let data = await InsertPromotion(
        name,
        cost,
        status,
        dateStart || "",
        dateExp || ""
      );

      if (data && +data.EC == 1) {
        toast.success(data.EM);
        setShowAdd(false);
      }
      if (data && +data.EC != 1) {
        toast.error(data.EM);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleShowAdd = () => {
    const flag = !showAdd;
    setShowAdd(flag);
  };

  useEffect(() => {
    fetchPromotion();
  }, [loading]);

  return (
    <>
      <h3 class="title categories-title">Promotion</h3>
      <div className="add_promotion_big_btn" onClick={() => handleShowAdd()}>
        <IoIosAdd className="add_promotion_big_btn--icon" />
        Add promotion
      </div>
      {showAdd && (
        <div className="form-list">
          <div className="table-header row">
            <div className="col-3">
              <h3 className="title">Add Promotion</h3>
            </div>
          </div>
          <form className="create-form">
            <div className="row">
              <div className="col-10">
                <div className="form-outline mb-4">
                  <label className="form-label" for="form6Example3">
                    Name
                  </label>
                  <input
                    type="text"
                    id="form6Example3"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control w-100"
                  />
                </div>
              </div>
              <div className="col-2">
                <label className="form-label" for="inlineFormSelectPref">
                  Status
                </label>
                <select
                  className="select w-100"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="1">ON</option>
                  <option value="2">OFF</option>
                </select>
              </div>
              <div className="col">
                <label className="form-label" for="form6Example3">
                  Cost
                </label>
                <input
                  type="text"
                  id="form6Example3"
                  value={cost}
                  onChange={(e) => setCost(e.target.value)}
                  className="form-control w-100"
                />
              </div>
              <div className="col">
                <label for="birthdaytime">Begin</label>
                <input
                  type="date"
                  id="birthdaytime"
                  name="birthdaytime"
                  value={dateStart}
                  onChange={(e) => setDateStart(e.target.value)}
                  className="form-control w-100"
                />
              </div>
              <div className="col">
                <label for="birthdaytime">End</label>
                <input
                  type="date"
                  id="birthdaytime"
                  name="birthdaytime"
                  className="form-control w-100"
                  value={dateExp}
                  onChange={(e) => setDateExp(e.target.value)}
                />
              </div>
            </div>
            <div className="col-2 mt-4">
              <button
                type="submit"
                onClick={(e) => handleInsertPromotion(e)}
                class="btn btn_save_catagories btn-clr-normal btn-block w-75 h-50"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      )}
      <div className="form-list mt-2">
        <div className="">
          <div className="bg-white">
            <div className="table-wrapper align-middle mb-0">
              <div className="row row-header">
                <div className="col-lg-4">Promotion Name</div>
                <div className="col-lg-2">Price</div>
                <div className="col-lg-2">Day Begin</div>
                <div className="col-lg-2">Day End</div>
                <div className="col-lg-2">Status</div>
              </div>
              <div className="seperate"></div>
              <div className="table-body">
                {promotion.map((promotion, key) => {
                  return (
                    <div key={key} className="row item-list">
                      <div className="col-lg-4">
                        <div className="d-flex align-items-center">
                          <div className="">
                            <p className="mb-1">{promotion.Name}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2">
                        {promotion.Price.toLocaleString("de-DE")}{" "}
                        <span>&#8363;</span>
                      </div>
                      <div className="col-lg-2">
                        <p className="fw-normal mb-1">
                          {formatDate(new Date(promotion.dateStart))}
                        </p>
                      </div>
                      <div className="col-lg-2">
                        <p className="fw-normal mb-1">
                          {formatDate(new Date(promotion.dateExp))}
                        </p>
                      </div>
                      <div className="col-lg-1">
                        <div
                          className={
                            promotion.Status == 1
                              ? "text-center px-1 w-75 btn-sml btn_success rounded-1"
                              : "text-center px-1 w-75 btn-sml btn_danger rounded-1"
                          }
                        >
                          {promotion.Status == 1 ? "ON" : "OFF"}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Promotion;
