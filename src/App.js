import React, { StrictMode } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import "./css/plugins.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

//admin
import { AdminLayout } from "./components/Layout/AdminLayout";
import { AdminDB } from "./components/pages/admin/AdminDB";
// import AdminSideBar from "./components/Admin/Admin_Header/AdminSideBar";
import { AdminSideBar } from "./components/Layout/SideMenu/SideBar";

// casher
import { CasherLayout } from "./components/Layout/CasherLayout";
import OrderPage from "./components/pages/Casher/MakeOrderPage";
import OrderComplete from "./components/Element/Order/OrderComplete";
import { MenuManagementPage } from "./components/pages/Casher/MenuManagementPage";
import { OrderManagement } from "./components/pages/Casher/OrdersPage";
import { LoginPage } from "./components/pages/Auth/LoginPage";

// admin
import Production from "./components/Admin/Production/Production";
import Promotion from "./components/Admin/Promotion/Promotion";
import Catagories from "./components/Admin/Catagories/Catagories";
import Supplier from "./components/Admin/Supplier/Supplier";
import Staff from "./components/Admin/Store/Staff/Staff";
import User from "./components/Admin/Store/User/User";
import Assign from "./components/Admin/Store/Assignment/Assign";
import Calendar from "./components/Admin/Store/Calendar/Calendar";
import Ingredient from "./components/Admin/Ingredient/Ingredient";
import Timeoff from "./components/Staff/TimeOff/Timeoff";
import FeedBack from "./components/FeedBack/FeedBack";
import FeedbackThanks from "./components/FeedBack/FeedbackThanks";
import AddminFeedBack from "./components/Admin/Customer/FeedBack";

// kitchen
import { KitchenLayout } from "./components/Layout/KitchenLayout";
import { OrderPage as KitchenOrder } from "./components/pages/Kitchen/OrderPage";

// Staff
import { Assignment } from "./components/Staff/Assignment/Assignment";

// private route
import PrivateRoute from "./components/pages/Auth/PrivateRoute";

import "jquery/dist/jquery.min.js";
import "popper.js/dist/popper.min.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "./js/main.js";

function App() {
  const pathname = window.location.pathname;
  let flag = false;
  if (pathname == "/admin") {
    flag = true;
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <StrictMode>
        <Router>
          {/* <NavBar /> */}
          <Routes>
            <Route path="/feedback" element={<FeedBack />} />
            <Route path="/feedback/thanks" element={<FeedbackThanks />} />
            <Route path="/login" element={<LoginPage />} />

            {/* casher */}
            <Route
              path="/casher/makeOrder"
              element={
                // <PrivateRoute pos="3">
                  <OrderPage />
                // </PrivateRoute>
              }
            />
            <Route
              path="/casher/order_complete"
              element={
                <PrivateRoute pos="3">
                  <OrderComplete />
                </PrivateRoute>
              }
            />
            <Route
              path="/casher"
              element={
                <PrivateRoute pos="3">
                  <CasherLayout />
                </PrivateRoute>
              }
            >
              <Route path="/casher/menu" element={<MenuManagementPage />} />
              <Route
                path="/casher/orders"
                element={<OrderManagement />}
              ></Route>
            </Route>

            {/* admin */}
            <Route
              path="/admin"
              element={
                <PrivateRoute pos="4">
                  <AdminLayout />
                </PrivateRoute>
              }
            >
              <Route path="/admin/dashboard" element={<AdminDB />}></Route>
              {/* production */}
              <Route path="/admin/production" element={<Production />}></Route>
              <Route
                path="/admin/production/promotion"
                element={<Promotion />}
              ></Route>
              <Route
                path="/admin/feedback"
                element={<AddminFeedBack />}
              ></Route>
              <Route
                path="/admin/production/catagories"
                element={<Catagories />}
              ></Route>
              <Route
                path="/admin/production/ingredient"
                element={<Ingredient />}
              ></Route>
              <Route
                path="/admin/production/supplier"
                element={<Supplier />}
              ></Route>
              <Route path="/admin/timeoff" element={<Timeoff />}></Route>
              {/* store */}
              <Route path="/admin/store/staff" element={<Staff />}></Route>
              <Route path="/admin/store/user" element={<User />}></Route>
              <Route
                path="/admin/store/assignment"
                element={<Assign />}
              ></Route>
              <Route
                path="/admin/store/calendar"
                element={<Calendar />}
              ></Route>
            </Route>
            {/* kitchen */}
            <Route
              path="/kitchen"
              element={
                <PrivateRoute pos="1">
                  <KitchenLayout />
                </PrivateRoute>
              }
            >
              <Route path="/kitchen/orders" element={<KitchenOrder />}></Route>
            </Route>
            {/* staff */}
            <Route path="/staff" element={<AdminLayout />}>
              <Route path="/staff/assignment" element={<Assignment />} />
            </Route>
          </Routes>
        </Router>

        <ToastContainer
          position="bottom-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </StrictMode>
    </DndProvider>
  );
}

export default App;
