import React, { useState, createContext } from "react";
import {} from "react-spinners";

const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
  let values = [];

  return (
    <LoadingContext.Provider value={values}>{children}</LoadingContext.Provider>
  );
};

export const LoadingSpinner = () => {
  
};
