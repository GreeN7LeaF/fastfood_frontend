import React, { useState, useEffect } from "react";
import moment from "moment";

import { getAllStaff } from "../../../../services/staff";

export const Shift = ({ data, clickToAddOrRemove }) => {
  const [staffs, setStaffs] = useState([]);

  const getStaffNameById = (staffId) => {
    const staff = staffs.find((staff) => staff.StaffID === data.StaffID);
    if (staff) {
      return staff.Name;
    } else {
      return "Unknown"; // Return a default value if staff ID is not found
    }
  };

  const fetchStaffData = async () => {
    if (staffs.length == 0) {
      const data = await getAllStaff();
      if (data && data.EC != -1) {
        setStaffs(data.DT);
      }
    }
  };

  useEffect(() => {
    fetchStaffData();
  }, []);

  return (
    <div
      className={`shift-container row s-${data.ShiftID - 1} ${
        data.Status ? "added" : ""
      }`}
      style={{
        backgroundColor: `var(--clr-s-${data.ShiftID - 1})`,
        color: data.ShiftID - 1 < 2 ? `` : `#fff`,
      }}
      onClick={() => clickToAddOrRemove(data.StaffID, data.ShiftID)}
    >
      <div className="shift-name col">{getStaffNameById(data.StaffID)}</div>
    </div>
  );
};
