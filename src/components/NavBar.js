import React from "react";

import {
  CasherHeader,
  AuthHeader,
  DefaultHeader,
  KitchenHeader,
} from "./Layout/Header";

export const NavBar = () => {
  const pathname = window.location.pathname;
  if (pathname.includes("/admin")) {
    return <AuthHeader />;
  } else if (pathname.includes("/casher")) {
    return <CasherHeader />;
  } else if (pathname.includes("/kitchen")) {
    return <KitchenHeader />;
  } else {
    return <DefaultHeader />;
  }
};
