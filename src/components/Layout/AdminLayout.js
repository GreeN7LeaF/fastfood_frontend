import React from "react";
import { Outlet } from "react-router-dom";
import { AdminSideBar } from "./SideMenu/SideBar";
import { AssignShiftProvider } from "../../components/Context/AssignShiftContext";
import "../../css/AdminLayout.css";

export const AdminLayout = () => {
  return (
    <div className="container-fluid adminLayout_container">
      <div className="row">
        <div id="sidebar" className="sidebar py-4 px-0 col-lg-2">
          <AdminSideBar />
        </div>
        <div className="main-content product px-0 col-lg me-5">
          <div className="content py-4">
            <AssignShiftProvider>
              <Outlet />
            </AssignShiftProvider>
          </div>
        </div>
      </div>
    </div>
  );
};
