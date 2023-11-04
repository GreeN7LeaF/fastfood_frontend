import React, { createContext, useReducer } from "react";
import moment from "moment";

import {
  getAssignByStaffID,
  getAllAssign,
} from "../../services/calendarService";

const AssignShiftContext = createContext();

function shiftReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_ASSIGN":
      return [...state, ...action.payload];
    case "REMOVE_FROM_ASSIGN":
      return state.filter(
        (item) =>
          item.ShiftID !== action.payload[0].ShiftID ||
          item.Date !== action.payload[0].Date
      );
    case "EMPTY_ASSIGN":
      return [];
    default:
      return state;
  }
}

function calendarReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CAL":
      return [...state, ...action.payload];
    case "REMOVE_FROM_CAL":
      return state.filter(
        (item) =>
          item.ShiftID !== action.payload[0].ShiftID ||
          item.StaffID !== action.payload[0].StaffID ||
          item.Date !== action.payload[0].Date
      );
    case "RESET_CAL":
      return [];
    default:
      return state;
  }
}

//use in assignment of staff
const days = [
  {
    Name: "Sunday",
    Day: "",
    Shifts: [],
  },
  {
    Name: "Monday",
    Day: "",
    Shifts: [],
  },
  {
    Name: "Tuesday",
    Day: "",
    Shifts: [],
  },
  {
    Name: "Wednesday",
    Day: "",
    Shifts: [],
  },
  {
    Name: "Thursday",
    Day: "",
    Shifts: [],
  },
  {
    Name: "Friday",
    Day: "",
    Shifts: [],
  },
  {
    Name: "Saturday",
    Day: "",
    Shifts: [],
  },
];
//use in assignment of admin
const daysAssign = [
  {
    Name: "Sunday",
    Day: "",
    Shifts: [],
  },
  {
    Name: "Monday",
    Day: "",
    Shifts: [],
  },
  {
    Name: "Tuesday",
    Day: "",
    Shifts: [],
  },
  {
    Name: "Wednesday",
    Day: "",
    Shifts: [],
  },
  {
    Name: "Thursday",
    Day: "",
    Shifts: [],
  },
  {
    Name: "Friday",
    Day: "",
    Shifts: [],
  },
  {
    Name: "Saturday",
    Day: "",
    Shifts: [],
  },
];

const getNextWeekDays = () => {
  const today = moment();
  const nextWeek = today.clone().add(1, "weeks");

  for (let i = 0; i < 7; i++) {
    const day = nextWeek.clone().add(i, "days");
    days[i].Day = day.format("YYYY-MM-DD");
    daysAssign[i].Day = day.format("YYYY-MM-DD");
  }
};
//render staff assignment shift saving (staff)
const initAssignStaffData = async () => {
  getNextWeekDays();
  const staffid = JSON.parse(sessionStorage.getItem("User")).StaffID;
  if (staffid != undefined) {
    const result = await getAssignByStaffID(staffid);
    if (result && result.EC != -1) {
      days.map((d) => {
        //get shift that have same Date and then add to Day
        const shiftList = result.DT.filter(
          (r) => r.Date.substring(0, 10) == d.Day
        );
        d.Shifts = shiftList;
      });
    }
  }
  // console.log("days: ", days);
};
//render staff assignment list (admin)
const initAssignAdminData = async () => {
  getNextWeekDays();
  const result = await getAllAssign();
  if (result && result.EC != -1) {
    daysAssign.map((d) => {
      //get shift that have same Date and then add to Day
      const shiftList = result.DT.filter(
        (r) => r.Date.substring(0, 10) == d.Day
      );
      shiftList.map((s) => (s.Status = false));
      d.Shifts = shiftList;
    });
  }
  // console.log("days: ", daysAssign);
};

const AssignShiftProvider = ({ children }) => {
  const initAssginmentStaff = () => {
    initAssignStaffData();
  };

  const initAssginmentAdmin = () => {
    initAssignAdminData();
  };

  const [assignmentDetails, dispatch] = useReducer(shiftReducer, []);

  const addToAssign = (item) => {
    dispatch({ type: "ADD_TO_ASSIGN", payload: item });
  };

  const removeFromAssign = (item) => {
    dispatch({ type: "REMOVE_FROM_ASSIGN", payload: item });
  };

  const [calendarDetails, dispatch2] = useReducer(calendarReducer, []);

  const addToCal = (item) => {
    dispatch2({ type: "ADD_TO_CAL", payload: item });
  };

  const removeFromCal = (item) => {
    dispatch2({ type: "REMOVE_FROM_CAL", payload: item });
  };

  const values = {
    days,
    daysAssign,
    assignmentDetails,
    addToAssign,
    removeFromAssign,
    calendarDetails,
    addToCal,
    removeFromCal,
    initAssginmentStaff,
    initAssginmentAdmin,
  };

  return (
    <AssignShiftContext.Provider value={values}>
      {children}
    </AssignShiftContext.Provider>
  );
};

export { AssignShiftProvider, AssignShiftContext };
