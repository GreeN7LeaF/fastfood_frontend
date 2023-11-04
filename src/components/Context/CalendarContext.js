import React, { createContext, useReducer } from "react";
import moment from "moment";

import { getAllAssign } from "../../services/calendarService";

const CalendarShiftContext = createContext();

function shiftReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CAL":
      return [...state, ...action.payload];
    case "REMOVE_FROM_CAL":
      return state.filter(
        (item) =>
          item.ShiftID !== action.payload[0].ShiftID ||
          item.Date !== action.payload[0].Date
      );
    case "RESET_CAL":
      return [];
    default:
      return state;
  }
}

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

const getNextWeekDays = () => {
  const today = moment();
  const nextWeek = today.clone().add(1, "weeks");

  for (let i = 0; i < 7; i++) {
    const day = nextWeek.clone().add(i, "days");
    days[i].Day = day.format("YYYY-MM-DD");
  }
};
const initData = async () => {
  getNextWeekDays();
  const result = await getAllAssign();
  if (result && result.EC != -1) {
    days.map((d) => {
      //get shift that have same Date and then add to Day
      const shiftList = result.DT.filter(
        (r) => r.Date.substring(0, 10) == d.Day
      );
      d.Shifts = shiftList;
    });
  }
  // console.log("days: ", days);
};
initData();

const CalendarShiftProvider = ({ children }) => {
  const [calendarDetails, dispatch] = useReducer(shiftReducer, []);

  const addToCal = (item) => {
    dispatch({ type: "ADD_TO_CAL", payload: item });
  };

  const removeFromCal = (item) => {
    dispatch({ type: "REMOVE_FROM_CAL", payload: item });
  };

  const values = { days, calendarDetails, addToCal, removeFromCal };

  return (
    <CalendarShiftContext.Provider value={values}>
      {children}
    </CalendarShiftContext.Provider>
  );
};

export { CalendarShiftProvider, CalendarShiftContext };
