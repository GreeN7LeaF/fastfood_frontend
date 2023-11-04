import React from "react";
import { Link } from "react-router-dom";
import "../css/root.css";
import "../css/main.css";

const AdminSideBar = (props) => {
  return (
    <div>
      <div id="sidebar">
        <ul className="nav-list">
          <li className="nav-item has-submenu">
            <Link className="nav-link active" href="#">
              <b>Product Management </b>
            </Link>
            <ul className="submenu collapse show">
              <li>
                <Link className="nav-link" ex to="/admin/production">
                  Product
                </Link>
              </li>

              <li>
                <Link className="nav-link active" to="/admin/catagories">
                  Catagories
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item has-submenu">
            <Link className="nav-link active" href="#">
              <b>Supplier Management </b>
            </Link>
            <ul className="submenu collapse show">
              <li>
                <Link className="nav-link" ex to="/admin/supplier">
                  Supplier
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item has-submenu">
            <Link className="nav-link active" href="#">
              <b>Staff Management </b>
            </Link>
            <ul className="submenu collapse show">
              <li>
                <Link className="nav-link" ex to="/admin/staff">
                  Staff
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item has-submenu">
            <Link className="nav-link active" href="#">
              <b>Promotion Management </b>
            </Link>
            <ul className="submenu collapse show">
              <li>
                <Link className="nav-link active" to="/admin/promotion">
                  Promotion
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminSideBar;
