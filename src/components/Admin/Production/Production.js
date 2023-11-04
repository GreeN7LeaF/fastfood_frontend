import React, { useEffect, useState, useCallback } from "react";
import "../css/root.css";
import "../css/main.css";
import ProductModal from "./ProductModal";

import { getAllProduct } from "../../../services/productList";
import { getAllProductType } from "../../../services/productType";
import { removeFood } from "../../../services/foodServices";
import { deleteFoodSoft } from "../../../api/callApi";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import { IoIosAdd } from "react-icons/io";
import { toast } from "react-toastify";

const Production = (props) => {
  const [showModal, setShowModal] = useState(false);

  const [name, setName] = useState("");
  const [id, setid] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [type, setType] = useState(1);
  const [recipe, setRecipe] = useState(1);
  const [note, setNote] = useState("");
  const [status, setStatus] = useState(0);

  const [productList, setProductList] = useState([]);
  const [dataFood, setDataFood] = useState({});
  const [selectedProductId, setSelectedProductId] = useState(null);

  const [action, setAction] = useState("CREATE");

  const handleDeleteFood = async (id) => {
    setid(id);
    if (id) {
      const data = await deleteFoodSoft(id);
      if (data && +data.EC === 1) {
        toast.success(data.EM);
      }

      if (data && +data.EC != 1) {
        toast.error(data.EM);
      }
    }
  };

  const handleShowModal = () => {
    let flag = !showModal;
    setShowModal(flag);
  };

  const handleCreateProduct = () => {
    handleShowModal();
    setAction("CREATE");
  };

  const handleAction = useCallback(
    (productId) => {
      setSelectedProductId(productId);
      const selectedProduct = productList.find(
        (product) => product.ID == productId
      );
      if (selectedProduct) {
        setName(selectedProduct.Name);
        setPrice(selectedProduct.Price);
        setImage(selectedProduct.Image);
        setType(selectedProduct.Type);
        setRecipe(selectedProduct.Recipe);
        setStatus(selectedProduct.Status);
        setid(productId);
        setDataFood({
          name: selectedProduct.Name,
          price: selectedProduct.Price,
          image: selectedProduct.Image,
          type: selectedProduct.Type,
          recipe: selectedProduct.Recipe,
          status: selectedProduct.Status,
        });
      }
      if (dataFood) {
        setAction("UPDATE");
        setShowModal(true);
      }
    },
    [productList]
  );

  const fetchData = async () => {
    const dataProduct = await getAllProduct();
    setProductList(dataProduct.DT);
  };

  const handleAddproduct = () => {
    handleShowModal();
    setAction("CREATE");
    setName("");
    setType("");
    setRecipe("");
    setImage("");
    setPrice("");
    setNote("");
  };

  useEffect(() => {
    fetchData();
  }, [productList]);

  return (
    <>
      <div className="table-header row">
        <h3 className="title">Product</h3>
        <div
          className="add_promotion_big_btn"
          onClick={() => handleAddproduct()}
        >
          <IoIosAdd className="add_promotion_big_btn--icon" />
          Add Product
        </div>
      </div>
      <div className="">
        <div className="form-list">
          <table className="table-wrapper mb-0">
            <div className="row row-header">
              <div className="col-lg-3">Product Name</div>
              <div className="col-lg-2">Category</div>
              <div className="col-lg-2">Price</div>
              <div className="col-lg-2">Image</div>
              <div className="col-lg-1">Status</div>
              <div className="col-lg-2">Actions</div>
            </div>
            <div className="seperate"></div>
            <div className="table-body">
              {productList
                .filter((product) => product.Status == 1)
                .map((product, key) => {
                  return (
                    <div key={key} className="row item-list">
                      <div className="col-lg-3">
                        <div className="d-flex align-items-center">
                          <div className="">
                            <p className="mb-1">{product.Name}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2">
                        <p className="fw-normal mb-1">{product.NameType}</p>
                      </div>
                      <div className="col-lg-2">
                        {product.Price.toLocaleString("de-DE")}{" "}
                        <span>&#8363;</span>
                      </div>
                      <div className="col-lg-2">
                        <img src={product.Image} className="image-product" />
                      </div>
                      <div className="col-lg-1">
                        <div
                          className={
                            product.Status == 1
                              ? "text-center px-1 w-75 btn-sml btn_success rounded-1"
                              : "text-center px-1 w-75 btn-sml btn_danger rounded-1"
                          }
                        >
                          {product.Status == 1 ? "ON" : "OFF"}
                        </div>
                      </div>
                      <div className="col-lg-2">
                        <div className="d-flex flex-row gap-1">
                          <a className="nav-link">
                            <CiEdit
                              className="edit-icon"
                              id={product.ID}
                              onClick={(e) => handleAction(e.target.id)}
                            />
                          </a>
                          <a href="#" className="nav-link">
                            <AiOutlineDelete
                              className="del-icon"
                              onClick={() => handleDeleteFood(product.ID)}
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </table>
        </div>
      </div>
      {showModal && (
        <ProductModal
          show={showModal}
          setShowModal={setShowModal}
          onHide={handleShowModal}
          action={action}
          dataFood={dataFood}
          id={id}
          name={name}
          image={image}
          type={type}
          price={price}
          recipe={recipe}
          status={status}
          setName={setName}
          setImage={setImage}
          setType={setType}
          setNote={setNote}
          setPrice={setPrice}
          setStatus={setStatus}
          setRecipe={setRecipe}
        />
      )}
    </>
  );
};

export default Production;
