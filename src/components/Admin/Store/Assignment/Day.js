import React, { useState, useEffect, useContext } from "react";
import moment from "moment";
import { toast } from "react-toastify";

import { AssignShiftContext } from "../../../Context/AssignShiftContext";
import { Shift } from "./Shift";
import { getAllStaff } from "../../../../services/staff";

export const Day = (props) => {
  //shift information list
  const [staffs, setStaffs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dataLoaded, setDataLoaded] = useState(false);

  const { addToCal, calendarDetails, removeFromCal } =
    useContext(AssignShiftContext);

  const init = async () => {
    if (staffs.length === 0) {
      setDataLoaded(false);
      const data = await getAllStaff();
      if (data && data.EC != -1 && data.DT != staffs) {
        setStaffs(data.DT);
        console.log("render data");
      } else {
        setStaffs([]);
      }
      setDataLoaded(true);
    }
    setLoading(false);
  };

  const handleAddandRemoveShift = (staffID, shiftID) => {
    const check = calendarDetails.filter(
      (s) =>
        s.StaffID === staffID &&
        s.ShiftID === shiftID &&
        s.Date.substring(0, 10) === props.data.Day
    );

    if (check.length === 0) {
      //set status to true
      props.data.Shifts.map((s) => {
        if (
          s.StaffID == staffID &&
          s.ShiftID == shiftID &&
          s.Date.substring(0, 10) === props.data.Day
        ) {
          s.Status = true;
          console.log(s);
        }
      });

      const obj = [
        { ShiftID: shiftID, StaffID: staffID, Date: props.data.Day },
      ];
      addToCal(obj);
      props.incCount();
    } else {
      props.data.Shifts.map((s) => {
        if (
          s.StaffID == staffID &&
          s.ShiftID == shiftID &&
          s.Date.substring(0, 10) === props.data.Day
        ) {
          s.Status = false;
        }
      });

      const obj = [
        { ShiftID: shiftID, StaffID: staffID, Date: props.data.Day },
      ];
      removeFromCal(obj);
      props.decCount();
    }
  };

  useEffect(() => {
    init();
  }, [props.data.Shifts]);

  // console.log("calendar list: ", calendarDetails);

  useEffect(() => {}, [
    loading,
    staffs,
    props.data,
    dataLoaded,
    props.data.Shifts,
  ]);

  return (
    <div
      className="day"
      style={{ backgroundColor: `var(--clr-${props.index + 1})` }}
    >
      <div className=" day-title">
        <div>{props.data && props.data.Name}</div>
        <div className="day-time">
          {props.data && moment(props.data.Day).format("DD/MM/yy")}
        </div>
      </div>
      <div className=" drop-area">
        {props.data &&
          props.data.Shifts.map((s, idx) => (
            <Shift
              key={idx}
              data={s}
              clickToAddOrRemove={handleAddandRemoveShift}
            />
          ))}
      </div>
    </div>
  );
};
