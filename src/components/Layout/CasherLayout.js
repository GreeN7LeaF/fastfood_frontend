import React, { useState, useEffect } from "react";

import { getStaffByUserId } from "../../services/staff";

import { Outlet } from "react-router-dom";
import { CasherSideBar } from "./SideMenu/SideBar";

import { MyAccountModal } from "../Account/MyAccountModal";

export const CasherLayout = () => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const handleShowModal = () => {
    let flag = !showModal;
    setShowModal(flag);
  };

  const staffid = JSON.parse(sessionStorage.getItem("User")).StaffID;
  const [user, setUser] = useState({});

  const fetchUser = async () => {
    const data = await getStaffByUserId(staffid);
    if (data && data.EC != -1) {
      console.log("data: ", data.DT);
      setUser(data.DT);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUser();
  }, [loading]);

  return (
    <div id="wapper" className="flex-wrapcontainer-fluid">
      <div className="row flex-nowrap">
        <div id="mySidebar" className="col-2 col-md-3 col-lg-2 min-vh-100">
          <div className="">
            <div className="logo">
              <div className="logo-img">
                <img
                  src="https://images-platform.99static.com//zfLktX5H5gpA2mkiYB5tONTmPNM=/0x0:999x999/fit-in/500x500/99designs-contests-attachments/116/116570/attachment_116570888"
                  alt="logo image"
                />
              </div>
              <span>FoodiePos</span>
            </div>
            <CasherSideBar />
          </div>
          <div className="account my-3">
            <div className="account-card text-center">
              <div className="account-img">
                <img src="../images/default.jpg" alt="account image" />
              </div>
              <div className="my-2">Thao My</div>
              <div className="my-2">Casher</div>
              <button className="btn btn-clr-normal" onClick={handleShowModal}>
                Details
              </button>
            </div>
          </div>
        </div>
        <Outlet />
      </div>
      <MyAccountModal user={user} show={showModal} onHide={handleShowModal} />
    </div>
  );
};
