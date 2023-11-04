import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import "./AdminHeader.css"
import { AiOutlineSetting } from "react-icons/ai";


const AdminHeader = (props) => {
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
                    <button className="btn rounded-lg btn-clr-normal" type="submit">
                      <AiOutlineSearch className="search-icon"/>
                    </button>
                  </form>
                </div>
                <div className="d-flex flex-row">
                  <ul className="nav justify-content-end">
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="#">
                        Feedback
                      </a>
                    </li>
                    <li className="nav-item ms-2">
                      <a className="nav-link setting" href="#">
                        <AiOutlineSetting className="setting-icon"/>
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
                    {/* <ul className="navbar-nav nav-list me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">
                          Dashboard
                        </a> 
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link " to="/admin/production">
                          Product
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="#">
                          Store
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="#">
                          Time
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="#">
                          Record
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="#">
                          Performance
                        </Link>
                      </li>
                    </ul> */}
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

export default AdminHeader;
