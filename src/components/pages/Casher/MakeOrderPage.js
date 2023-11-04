import React from "react";
import Tab from "../../Element/Tab/Tab";
import Order from "../../Element/Order/Order";
import { ActiveProvider } from "../../Context/ActiveContext";
import { OrderProvider } from "../../Context/OrderContext";

import "../../../css/style.css";
import "../../../css/templete.css";
import "../../../css/skin/skin-1.css";

export default function OrderPage() {

  return (
    //active tab
    <ActiveProvider>
      <div className="container-fluid background_grey">
        <div className="row">
          <OrderProvider>
            <Tab />
            <Order />
          </OrderProvider>
        </div>
      </div>
    </ActiveProvider>
  );
}
