import React, { useEffect, useState } from "react";
import "../css/main.css";
import "../css/root.css";
import "../Promotion/Promotion.css";
import { getFeedBack } from "../../../api/callApi";

function formatDate(date) {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
}

const FeedBack = (props) => {
  const [promotion, setPromotion] = useState([]);
  const fetchPromotion = async () => {
    try {
      const dataPromotion = await getFeedBack();
      setPromotion(dataPromotion.DT);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPromotion();
  }, [promotion]);

  return (
    <>
      <h3 class="title categories-title">FeedBack</h3>
      <div className="form-list mt-2">
        <div className="">
          <div className="bg-white">
            <div className="table-wrapper align-middle mb-0">
              <div className="row row-header">
                <div className="col-lg-3">Customer Name</div>
                <div className="col-lg-3">Contact</div>
                <div className="col-lg-3">content</div>
                <div className="col-lg-3">Time</div>
              </div>
              <div className="seperate"></div>
              <div className="table-body">
                {promotion.map((promotion, key) => {
                  return (
                    <div key={key} className="row item-list">
                      <div className="col-lg-3">
                        <div className="d-flex align-items-center">
                          <div className="">
                            <p className="mb-1">{promotion.name}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3">{promotion.contact}</div>
                      <div className="col-lg-3">{promotion.content}</div>
                      <div className="col-lg-3">{promotion.time}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeedBack;
