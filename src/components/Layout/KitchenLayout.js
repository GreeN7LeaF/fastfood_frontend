import React from "react";
import { Outlet } from "react-router-dom";
import { KitchenSideBar } from "./SideMenu/SideBar";

export const KitchenLayout = () => {
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
            <KitchenSideBar />
          </div>
          <div className="account my-3">
            <div className="account-card text-center">
              <div className="account-img">
                <img src="../images/default.jpg" alt="account image" />
              </div>
              <div className="my-2">Thao My</div>
              <div className="my-2">Kitchen</div>
              <button className="btn btn-clr-normal">Details</button>
            </div>
          </div>
        </div>
        <div id="myMain" className="">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
