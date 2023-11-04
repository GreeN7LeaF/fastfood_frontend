import React, {
  useContext,
  createContext,
  useEffect,
  useState,
  useCallback,
  useMemo,
} from "react";

import { OrderContext } from "../../Context/OrderContext";
import { addNewOrder } from "../../../services/orderServices";
import { CheckoutModal } from "./CheckoutModal";

import { useNavigate } from "react-router-dom";
import {} from "phosphor-react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { AiOutlineMinus } from "react-icons/ai";
import { IoAdd } from "react-icons/io5";
import { Trash } from "phosphor-react";
import { AddNewOrderData, checkOutOrder } from "../../../api/callApi";
import "./Order.css";
export const OrderPaymentContext = createContext();

export default function Order() {
  const { removeFromOrder, orderDetails, emptyOrder } =
    useContext(OrderContext);

  const navigate = useNavigate();

  let orderData = { StaffID: 3, BillDetails: [] };
  const [orderList, setOrderList] = useState([]);
  const [userId, setUserId] = useState(3);
  const [total, setTotal] = useState(0);

  const updateTotal = useCallback(() => {
    const sum = orderList.reduce(
      (acc, item) => acc + item.Price * item.Quantity,
      0
    );
    setTotal(sum);
  }, [orderList]);

  const checkOut = async () => {
    if (total != 0) {
      const res = await checkOutOrder(total);
      if (res && +res.EC == 1) {
        location.href = res.DT;
        localStorage.setItem(
          "order",
          JSON.stringify({
            StaffID: userId,
            BillDetails: orderList,
          })
        );
        toast.success("Order completed successfully");
      }
    }
  };

  const clearOrder = () => {
    emptyOrder();
    setTotal(0);
  };

  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    let flag = !showModal;
    setShowModal(flag);
  };

  //track and render order list
  useEffect(() => {
    console.log("rendering");
    setOrderList([...orderDetails]);
  }, [orderDetails]);

  useEffect(() => {
    updateTotal();
  }, [updateTotal]);

  return (
    <div
      className="col-3 stickyPosition overflowy_hidden h-100"
      style={{ backgroundColor: "#fff" }}
    >
      <div className=" position-relative">
        {/* order details */}
        <div id="orderTable" className="table-responsive ">
          <div className="order_table_heading">
            <div className="trashcan" onClick={clearOrder}>
              <Trash size={26} color="#3a3a3a" weight="fill" />
            </div>
            <div className="employee-card">
              <div className="order_table_employee_img">
                <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/75a1736b-8ad6-4b3e-b47b-19f5987e9711/deigkx9-80dd0b0a-8d86-4292-9d51-db8524c6014c.jpg/v1/fill/w_670,h_1192,q_70,strp/dead_emoji_iphone_wallpaper___iphone_wallpapers_by_maxboosted_deigkx9-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTYwMCIsInBhdGgiOiJcL2ZcLzc1YTE3MzZiLThhZDYtNGIzZS1iNDdiLTE5ZjU5ODdlOTcxMVwvZGVpZ2t4OS04MGRkMGIwYS04ZDg2LTQyOTItOWQ1MS1kYjg1MjRjNjAxNGMuanBnIiwid2lkdGgiOiI8PTkwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.K_VIxJ25QayQUe1_8v-a2bca98Y2k70fU4ciB471jIc" />
              </div>
              <h6 className="order_table_staff_name">
                Dao My
                <h6 className="order_table_staff_job">Employee</h6>
              </h6>
              <div className="order_tabler_staff_icon">
                <MdOutlineKeyboardArrowDown className="order_tabler_staff_icon--icon" />
              </div>
            </div>
          </div>
          <div className="order_table_body">
            <h6 className="order_table_body_heading">Order menu</h6>
            <div className="order_table_body_list_order">
              {orderList.map((order) => (
                <div className="order_table_body_list_order_item mt-2">
                  <div className="list_order_item_image">
                    <img
                      src={
                        order.Image !== null &&
                        order.Image !== undefined &&
                        order.Image !== "null"
                          ? order.Image
                          : "../images/default.jpg"
                      }
                    />
                  </div>
                  <div className="list_order_item_name_contaiter">
                    <p className="item_name_container_name_food">
                      {order.Name}
                    </p>
                    <div className="name_food_quantity">
                      <AiOutlineMinus className="quantity_icon" />
                      <span className="quantity">{order.Quantity}</span>
                      <IoAdd className="quantity_icon" />
                    </div>
                  </div>
                  <div className="list_orderr_item_price_container">
                    <h6>
                      <span className="price_contaier_currency">$</span>
                      <span className="price_container_price">
                        {order.Total}
                      </span>
                    </h6>
                  </div>
                </div>
              ))}
            </div>
            <div
              id="checkout"
              className="justify-content-between align-items-center"
            >
              <div className="total_order_container">
                <p className="total_order">Total: </p>
                <p className="total_order_amount">
                  {total.toLocaleString("de-DE")}
                  <sup className="price_contaier_currency">&#8363;</sup>
                </p>
              </div>
              <div className="d-flex flex-column gap-2 ">
                <button className="checkoutbtn" onClick={handleShowModal}>
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CheckoutModal
        show={showModal}
        total={total}
        orderList={orderList}
        userId={userId}
        onHide={handleShowModal}
      />
    </div>
  );
}
