import React, { useState, createContext } from "react";
const ActiveContext = createContext();

const ActiveProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    console.log(tab);
    if (activeTab !== tab) setActiveTab(tab);
  };

  const value = {
    activeTab,
    toggle,
  };

  return (
    <ActiveContext.Provider value={value}>{children}</ActiveContext.Provider>
  );
};

export { ActiveContext, ActiveProvider };
