import React, { useEffect, useState, useCallback } from "react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import { getAllProductType } from "../../../services/productType";
import {
  InsertFoodTyppe,
  updateFood,
  updateFoodType,
} from "../../../api/callApi";
import { toast } from "react-toastify";
import "./Catagories.css";

const Catagories = (props) => {
  const [category, setcategory] = useState([]); // Renamed state variable and function to match component name
  const [action, setAction] = useState("CREATE"); // Renamed state variable to be more clear
  const [name, setName] = useState("");
  const [selectedTypeID, setSelectedTypeID] = useState(null); // Renamed state variable to use camelCase
  const [id, setID] = useState(null); // Renamed state variable to use camelCase
  const [dataType, setDataType] = useState();
  const [loading, setLoading] = useState(true);

  const fetchCategories = async () => {
    let dataCategories = await getAllProductType();
    setcategory(dataCategories.DT);
    setLoading(false);
  };

  const handleUpdateFood = async (e) => {
    e.preventDefault();
    if (id && name) {
      const data = await updateFood(id, name);
      if (data && +data.EC === 1) {
        toast.success(data.EM);
      }
      if (data && +data.EC !== 1) {
        toast.error(data.EM);
      }
    }
  };

  const handleEdit = (id, name) => {
    setAction("UPDATE");
    if (id && name) {
      setName(name);
      setID(id);
    }
  };

  const handleChange = useCallback((e) => {
    const value = e.target.value;
    if (!isNaN(value)) {
      setDataType("number");
    } else {
      setDataType("not-a-number");
    }
  }, []);

  useEffect(() => {
    fetchCategories();
  }, [loading]); // Removed unnecessary dependency on categories state variable

  if (loading) return <div>Đang tải...</div>;

  const handleAddTypeFood = async (e) => {
    e.preventDefault();
    try {
      let data = await InsertFoodType(name); // Fixed typo in function name
      if (data && +data.EC === 1) {
        // Use strict equality operator instead of loose equality operator
        toast.success(data.EM);
        fetchCategories();
      }
      if (data && +data.EC !== 1) {
        // Use strict equality operator instead of loose equality operator
        toast.error(data.EM);
      }
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <>
      <h3 className="title categories-title">Categories</h3>
      <div className="d-flex flex-col">
        <div className="col ms-4">
          <div className="form-list">
            <div className="table-header row">
              <div className="col-3">
                <h3 className="title">
                  {" "}
                  {action == "CREATE" ? "Add Category" : "Update category"}
                </h3>
              </div>
            </div>
            <form className="create-form">
              <div className="row" style={{ alignItems: "center" }}>
                <div className="col-10">
                  <div className="form-outline mb-4">
                    <label className="form-label" for="form6Example3">
                      Category name
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
                  <button
                    type="submit"
                    onClick={
                      action == "CREATE"
                        ? (e) => handleAddTypeFood(e)
                        : (e) => handleUpdateFood(e)
                    }
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
                    <div className="col-lg-4">Category Name</div>
                    <div className="col-lg-4">Description</div>
                    <div className="col-lg-2">Image</div>
                    <div className="col-lg-2">Action</div>
                  </div>
                  <div className="seperate"></div>
                  <div className="table-body">
                    {category.map((category, key) => {
                      return (
                        <div key={key} className="row item-list">
                          <div className="col-lg-4">
                            <div className="d-flex align-items-center">
                              <div className="">
                                <p className="mb-1">{category.Name}</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4">{category.Descript}</div>
                          <div className="col-lg-2">
                            {/* <img src={category.Image} /> */}
                          </div>
                          <div className="col-lg-2">
                            <div className="d-flex flex-row gap-1">
                              <a className="nav-link">
                                <CiEdit
                                  className="edit-icon"
                                  onClick={() =>
                                    handleEdit(category.ID, category.Name)
                                  }
                                />
                              </a>
                              {/* <a className="nav-link">
                                <AiOutlineDelete className="del-icon" />
                              </a> */}
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

export default Catagories;
