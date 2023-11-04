import React, { useState } from "react";

import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./header.css";

export const DefaultHeader = () => {
  return <div>Header</div>;
};

export const CasherHeader = () => {
  return (
    <div id="casher-header" className="bg-gr-bg">
      <div className="container-fluid bg-gr-primary py-1 px-xxl-5 ">
        <div className="container d-flex flex-row justify-between text-white">
          <div className="main-nav">
            <div className="container">
              <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                  <a className="navbar-brand" href="#">
                    Casher
                  </a>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav nav-list me-auto mb-2 mb-lg-0">
                      {/* Order */}
                      <li className="nav-item">
                        <Link to={"/casher/order"} className="nav-link">
                          Make Order
                        </Link>
                      </li>
                      {/* <!-- Order history --> */}
                      <li className="nav-item">
                        <Link to={"/casher/orders"} className="nav-link">
                          Orders
                        </Link>
                      </li>
                      {/* <!-- menu management --> */}
                      <li className="nav-item">
                        <Link to={"/casher/menu"} className="nav-link">
                          Menu Management
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <div className="profile">
            <div id="userNav" className="h-3">
              <img
                // src="../../../../images/user-default.jpg"
                className=""
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const KitchenHeader = () => {
  return (
    <div id="kitchen-header" className="bg-gr-bg">
      <div className="container-fluid bg-gr-primary py-1 px-xxl-5 ">
        <div className="container d-flex flex-row justify-between text-white">
          <div className="main-nav">
            <div className="container">
              <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                  <a className="navbar-brand" href="#">
                    Kitchen
                  </a>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav nav-list me-auto mb-2 mb-lg-0">
                      {/* <!-- Order  --> */}
                      <li className="nav-item">
                        <Link to={"/casher/orders"} className="nav-link">
                          Orders
                        </Link>
                      </li>
                      {/* <!-- menu management --> */}
                      <li className="nav-item">
                        <Link to={"/casher/menu"} className="nav-link">
                          Notify
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <div className="profile">
            <div id="userNav" className="h-3">
              <img
                // src="../../../../images/user-default.jpg"
                className=""
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const AuthHeader = () => {
  return (
    <div id="auth-header" className="bg-gr-bg">
      <div className="container-fluid bg-gr-primary py-md-3">
        <div className="d-flex flex-column text-white">
          <div className="upper-nav pb-3">
            <div className="container">
              <div className="d-flex flex-col justify-content-between">
                <div className="d-flex flex-row">
                  <a className="logo nav-link me-3"> LOGO </a>
                  <form className="d-flex">
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button
                      className="btn rounded-lg btn-clr-normal"
                      type="submit"
                    >
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                  </form>
                </div>
                <div className="d-flex flex-row">
                  <ul className="nav justify-content-end">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="#"
                      >
                        Feedback
                      </a>
                    </li>
                    <li className="nav-item ms-2">
                      <a className="nav-link setting" href="#">
                        <i className="fa-solid fa-gear"></i>
                      </a>
                    </li>
                  </ul>

                  <div className="user">
                    <img src="" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="main-nav">
            <div className="container">
              <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                  <a className="navbar-brand" href="#">
                    Admin
                  </a>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav nav-list me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">
                          Dashboard
                        </a>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/admin/production">
                          Production
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/admin/store">
                          Store
                        </Link>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Record
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Performance
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const OrderSubHeader = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div className="order-sub-header d-flex flex-row my-3">
        <Link
          to="/casher/orders/all"
          onClick={() => setActiveIndex(0)}
          className={
            activeIndex === 0 ? "nav-link mx-3 active" : "nav-link mx-3"
          }
        >
          All Orders
        </Link>
        <Link
          to="/casher/orders/processing"
          onClick={() => setActiveIndex(1)}
          className={
            activeIndex === 1 ? "nav-link mx-3 active" : "nav-link mx-3"
          }
        >
          Processing
        </Link>
        <Link
          to="/casher/orders/completed "
          onClick={() => setActiveIndex(2)}
          className={
            activeIndex === 2 ? "nav-link mx-3 active" : "nav-link mx-3"
          }
        >
          Completed
        </Link>
        <Link
          to={"/casher/"}
          onClick={() => setActiveIndex(3)}
          className={
            activeIndex === 3 ? "nav-link mx-3 active" : "nav-link mx-3"
          }
        >
          Cancelled
        </Link>
      </div>
    </>
  );
};
