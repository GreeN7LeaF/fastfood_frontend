import React, { useState, useEffect } from "react";
import moment from "moment";
import { CheckCircle, XCircle } from "phosphor-react";

import { getAllCalendar } from "../../../../services/calendarService";
import { getAllStaff } from "../../../../services/staff";

import "../Assignment/Assign.css";

const Calendar = () => {
  const [days, setDays] = useState([
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
  ]);
  const [staffs, setStaffs] = useState([]);

  const getStaffNameById = (staffId) => {
    const staff = staffs.find((staff) => staff.StaffID === staffId);
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

  const getNextWeekDays = () => {
    const today = moment();
    const nextWeek = today.clone().add(1, "weeks");

    const updatedDays = [...days];
    for (let i = 0; i < 7; i++) {
      const day = nextWeek.clone().add(i, "days");
      updatedDays[i].Day = day.format("DD/MM/YYYY");
      setDays(updatedDays);
    }
  };

  const fetchCalendarData = async () => {
    getNextWeekDays();
    const result = await getAllCalendar();
    if (result && result.EC != -1) {
      const copyDays = [...days];
      copyDays.map((prevDays) => {
        console.log("prev: ", prevDays);
        const shiftList = result.DT.filter(
          (r) => moment(r.Date).format("DD/MM/YYYY") === prevDays.Day
        );
        prevDays.Shifts = shiftList;
      });

      console.log("copy days: ", copyDays);

      setDays(copyDays);
    }
  };

  useEffect(() => {
    fetchCalendarData();
    fetchStaffData();
  }, []);

  if (!days[0]) {
    // Render a loading state or return null until days array is populated
    return <div>Loading..</div>;
  }

  return (
    <div id="admin-assignment">
      <div className="fs-3 title">Calendar</div>
      <div className="row">
        <div className=" col-3">
          Day from: <span>{days[0].Day}</span>
        </div>
        <div className="col-3">
          Day end: <span>{days[6].Day}</span>
        </div>
      </div>
      <div className="calendar-wrapper">
        <div className="calendar-container">
          {days.map((d, idx) => (
            <div
              key={idx}
              className="day"
              style={{ backgroundColor: `var(--clr-${idx + 1})` }}
            >
              <div className=" day-title">
                <div>{d.Name}</div>
                <div className="day-time">{d.Day}</div>
              </div>
              <div className=" drop-area">
                {d.Shifts.map((s, idx) => (
                  <div
                    key={idx}
                    className={`shift-container row s-${s.ShiftID - 1}`}
                    style={{
                      backgroundColor: `var(--clr-s-${s.ShiftID - 1})`,
                      color: s.ShiftID - 1 < 2 ? `` : `#fff`,
                    }}
                  >
                    <div className="shift-name col">
                      {getStaffNameById(s.StaffID)}
                    </div>
                    <div className="">
                      {s.Status ? (
                        <CheckCircle size={26} color="#ffffff" weight="fill" />
                      ) : (
                        <XCircle size={26} color="#ffffff" weight="fill" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
