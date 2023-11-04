import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AdminSB, StaffSB } from "./AdminSideBar";
import {
  Scroll,
  ChartLine,
  BellSimpleRinging,
  Info,
  FilmScript,
} from "phosphor-react";

const pathname = window.location.pathname;

export function AdminSideBar() {
  console.log(pathname);
  if (pathname.includes("/admin")) return <AdminSB />;
  else if (pathname.includes("/staff")) return <StaffSB />;
}

export function CasherSideBar() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <>
      <ul className="nav main-nav">
        <li className="nav-item" onClick={() => setActiveIndex(0)}>
          <Link
            to="/casher/orders"
            className={activeIndex === 0 ? "nav-link active" : "nav-link"}
          >
            <ChartLine size={26} color="#3a3a3a" weight="fill" />
            <span className="d-none d-sm-inline">Order List</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/casher/makeOrder" className="nav-link">
            <FilmScript size={26} color="#3a3a3a" weight="fill" />
            <span className="d-none d-sm-inline">Make Order</span>
          </Link>
        </li>
        <li className="nav-item" onClick={() => setActiveIndex(1)}>
          <Link
            to="/casher/menu"
            className={activeIndex === 1 ? "nav-link active" : "nav-link"}
          >
            <Scroll size={26} color="#3a3a3a" weight="fill" />
            <span className="d-none d-sm-inline">Menu</span>
          </Link>
        </li>
      </ul>
      <div className="subnav">
        <div className="sub-title my-2 mx-3">More options</div>
        <ul className="nav main-nav">
          <li className="nav-item" onClick={() => setActiveIndex(0)}>
            <Link to="/staff" className="nav-link">
              <BellSimpleRinging size={26} color="#3a3a3a" weight="fill" />
              <span className="d-none d-sm-inline">Staff</span>
            </Link>
          </li>
          <li className="nav-item" onClick={() => setActiveIndex(0)}>
            <a href="/" className="nav-link">
              <Info size={26} color="#3a3a3a" weight="fill" />
              <span className="d-none d-sm-inline">Support</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export function KitchenSideBar() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <>
      <ul className="nav main-nav">
        {/* <li className="nav-item" onClick={() => setActiveIndex(0)}>
          <a href="/" className="nav-link">
            <ChartLine size={26} color="#3a3a3a" weight="fill" />
            <span className="d-none d-sm-inline">Dashboard</span>
          </a>
        </li> */}
        <li className="nav-item" onClick={() => setActiveIndex(0)}>
          <Link
            to="/kitchen/orders"
            className={activeIndex === 0 ? "nav-link active" : "nav-link"}
          >
            <Scroll size={26} color="#3a3a3a" weight="fill" />
            <span className="d-none d-sm-inline">Order</span>
          </Link>
        </li>
      </ul>
      <div className="subnav">
        <div className="sub-title my-2 mx-3">More options</div>
        <ul className="nav main-nav">
          <li className="nav-item">
            <Link to="/staff" className="nav-link">
              <BellSimpleRinging size={26} color="#3a3a3a" weight="fill" />
              <span className="d-none d-sm-inline">Staff</span>
            </Link>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              <Info size={26} color="#3a3a3a" weight="fill" />
              <span className="d-none d-sm-inline">Support</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
