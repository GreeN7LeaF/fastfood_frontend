import React from "react";
import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ pos, children }) => {
  let isAuthenticated = false;
  const userDT = JSON.parse(sessionStorage.getItem("User"));
  if (
    userDT &&
    userDT.StaffID != null &&
    userDT.StaffID != "" &&
    userDT.StaffID != undefined &&
    userDT.Position == pos
  )
    isAuthenticated = true;

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
