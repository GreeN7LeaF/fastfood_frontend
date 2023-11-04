import React, { useState, useEffect, useContext } from "react";
import { useDrop } from "react-dnd";
import moment from "moment";
import { toast } from "react-toastify";

import { Shift } from "./Shift";
import { AssignShiftContext } from "../../Context/AssignShiftContext";
import { getShiftList } from "../../../services/shiftServices";

export const Day = (props) => {
  //assign shift list
  const [list, setList] = useState([]);
  //shift information list
  const [shifts, setShifts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { addToAssign, removeFromAssign } = useContext(AssignShiftContext);
  //get staffID
  const staffID = JSON.parse(sessionStorage.getItem("User")).StaffID;

  const init = async () => {
    if (shifts.length == 0) {
      setShifts([]);
      const data = await getShiftList();
      if (data && data.EC != -1) {
        setShifts(data.DT);
      } else {
        setShifts([]);
      }
      setLoading(false);
    }
  };

  const fetchDayData = () => {
    if (shifts.length > 0) {
      const day = props.data.Shifts;
      day.map((d) => {
        addShift(d.ShiftID);
      });
    }
  };

  const [{ isOver1 }, dropToAdd] = useDrop({
    accept: "shift",
    drop: (item) => addShift(item.id),
    collect: (monitor) => ({
      isOver1: !!monitor.isOver(),
    }),
  });

  const addShift = (id) => {
    //check if item is already exists in list or not?
    let check = list.filter((s) => s[0].ID === id);
    if (check.length == 0) {
      //if not then add
      const getShift = shifts.filter((shift) => id === shift.ID);

      if (staffID != null) {
        //add shift assignment into day
        setList((shift) => [...shift, getShift]);
        //add shift to assignmentDetails
        const obj = [
          { ShiftID: getShift[0].ID, StaffID: staffID, Date: props.data.Day },
        ];
        addToAssign(obj);
        props.incCount();
      } else
        toast.error("StaffID is null? Check the security of this application");
    }
  };

  const removeShift = (id) => {
    //remove item from list
    setList(list.filter((s) => s[0].ID !== id));

    const getShift = shifts.filter((shift) => id === shift.ID);
    //remove shift from assignmentDetails
    const obj = [
      { ShiftID: getShift[0].ID, StaffID: staffID, Date: props.data.Day },
    ];
    removeFromAssign(obj);
    props.decCount();
  };

  useEffect(() => {
    init();
    fetchDayData();
  }, [shifts.length]);

  // useEffect(() => {
  //   if (list.length > 0) fetchDayData();
  // }, [loading]);

  return (
    <div
      className={isOver1 ? "day drop" : "day"}
      ref={dropToAdd}
      style={{ backgroundColor: `var(--clr-${props.index + 1})` }}
    >
      <div className=" day-title">
        <div>{props.data && props.data.Name}</div>
        <div className="day-time">
          {props.data && moment(props.data.Day).format("DD/MM/yy")}
        </div>
      </div>
      <div className=" drop-area">
        {list &&
          list.map((s, idx) => (
            <Shift key={idx} shift={s[0]} onClick={removeShift} />
          ))}
      </div>
    </div>
  );
};
