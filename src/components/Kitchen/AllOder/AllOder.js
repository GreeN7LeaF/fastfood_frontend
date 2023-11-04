import React from "react";
import { BsCheckCircle } from "react-icons/bs";
import "./AllOder.css";
const AllOder = (props) => {
  return (
    <div className="big_container">
      <div className="Oder_Container">
        <div className="Oder_body">
          <h5 class="card_title">Danh sách đặt hàng </h5>
          <div className="Oder_main">
            <div className="Oder_status">
              <div className="New_Status">
                <div className="name_status">New</div>
                <div className="quantity">1</div>
              </div>
              <div className="Done_Status">
                <div className="name_status">Complete</div>
                <div className="quantity">1</div>
              </div>
            </div>
            <h5 class="card_title">New </h5>
            <div className="Oder_list">
              <div className="Oder_Detail">
                <div className="info_bill">
                  <div className="id_bill">#0001</div>
                  <button className="btn_complete">Complete</button>
                </div>
                <div className="total">
                  Total
                  <div className="total_price">350.000đ</div>
                </div>
                <div className="product_list">
                  <BsCheckCircle />
                  <div className="product_name">Gà rán</div>
                  <div className="product_quantity">2</div>
                </div>
              </div>
              <div className="Oder_Detail">
                <div className="info_bill">
                  <div className="id_bill">#0001</div>
                  <button className="btn_complete">Complete</button>
                </div>
                <div className="total">
                  Total
                  <div className="total_price">350.000đ</div>
                </div>
                <div className="product_list">
                  <BsCheckCircle />
                  <div className="product_name">Gà rán</div>
                  <div className="product_quantity">2</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllOder;
