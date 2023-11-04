import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { CiEdit } from "react-icons/ci";

import { getAllIngre } from "../../../services/ingredientServices";
import { getUnitList } from "../../../services/unit";

const Ingredient = () => {
  const [ingreList, setIngreList] = useState([]);
  const [unitList, setUnitList] = useState([]);
  const [loading, setLoading] = useState(true);

  const initUnitList = async () => {
    try {
      const data = await getUnitList();
      if (data && data.EC != -1) {
        setUnitList(data.DT);
      } else {
        setUnitList([]);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const initIngreList = async () => {
    try {
      const data = await getAllIngre();
      if (data && data.EC != -1) {
        setIngreList(data.DT);
      } else {
        setIngreList([]);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleInitData = async () => {
    initUnitList();
    initIngreList();
  };

  useEffect(() => {
    handleInitData();
  }, []);

  return (
    <>
      <h3 className="title categories-title">Ingredients</h3>
      <div className="d-flex flex-col">
        <div className="col ms-4">
          <div className="form-list">
            <div className="table-header row">
              <div className="col-3">
                <h3 className="title"></h3>
              </div>
            </div>
            <form className="create-form">
              <div className="row" style={{ alignItems: "center" }}>
                <div className="col-10">
                  <div className="form-outline mb-4">
                    <label className="form-label" for="form6Example3">
                      Ingredients name
                    </label>
                    <input
                      type="text"
                      id="form6Example3"
                      className="form-control w-100"
                    />
                  </div>
                </div>
                <div className="col-2">
                  <button
                    type="submit"
                    className="btn btn_save_catagories btn-clr-normal btn-block w-75 h-50"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="form-list mt-3">
            <div className="table-header row"></div>
            <div className="">
              <div className="bg-white">
                <div className="table-wrapper mb-0">
                  <div className="row row-header">
                    <div className="col-lg-4">Ingredient Name</div>
                    <div className="col-lg-2">Price</div>
                    <div className="col-lg-2">Quantity</div>
                    <div className="col-lg-2">Unit</div>
                    <div className="col-lg-2">Action</div>
                  </div>
                  <div className="seperate"></div>
                  <div className="table-body">
                    {ingreList &&
                      ingreList.map((ingr, key) => {
                        return (
                          <div key={key} className="row item-list">
                            <div className="col-lg-4">
                              <div className="d-flex align-items-center">
                                <div className="">
                                  <p className="mb-1">{ingr.Name}</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-2">{ingr.Price}</div>
                            <div className="col-lg-2">{ingr.Quantity}</div>
                            <div className="col-lg-2">
                              {unitList.length > 0 &&
                                unitList[ingr.Unit - 1].Name}
                            </div>
                            <div className="col-lg-2">
                              <div className="d-flex flex-row gap-1">
                                <a className="nav-link">
                                  <CiEdit className="edit-icon" />
                                </a>
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
        </div>
      </div>
    </>
  );
};

export default Ingredient;
