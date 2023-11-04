import React, { useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";

import { getShiftList } from "../../../../services/shiftServices";
import { insertCalendar } from "../../../../services/calendarService";
import { AssignShiftContext } from "../../../Context/AssignShiftContext";
import { Day } from "./Day";
import "./Assign.css";

const Assign = () => {
  const { daysAssign, initAssginmentAdmin, calendarDetails } =
    useContext(AssignShiftContext);
  const [shifts, setShifts] = useState([]);
  const [countShift, setCountShift] = useState(0);

  const [loading, setLoading] = useState(true);

  const incCount = () => setCountShift(countShift + 1);
  const decCount = () => setCountShift(countShift - 1);

  const fetchShifts = async () => {
    const data = await getShiftList();
    if (data && data.EC != -1) {
      setShifts(data.DT);
    } else {
      setShifts([]);
    }
  };

  const init = async () => {
    initAssginmentAdmin();
    setLoading(false);
  };

  const handleSave = async () => {
    const data = await insertCalendar(calendarDetails);
    if (data && data.EC != -1) {
      toast.success("Save calendar..");
      toast.success(data.EM);
    } else if (data && data.EC) {
      toast.error(data.EM);
    } else {
      toast.error(data);
    }
  };

  useEffect(() => {
    fetchShifts();
    init();
  }, [loading]);

  return (
    <div id="admin-assignment">
      <div className="assign-wrapper d-flex flex-column">
        <div className="calendar-wrapper">
          <div className="calendar-container">
            {daysAssign.map((d, idx) => (
              <Day
                key={idx}
                index={idx}
                data={d}
                incCount={incCount}
                decCount={decCount}
                loading={loading}
              />
            ))}
          </div>
        </div>
        <div className="row">
          <div className="shift-pane-list col-lg-2">
            {shifts &&
              shifts.map((s, idx) => (
                <div className="shift-item d-flex flex-row">
                  <div
                    className="color-pane"
                    style={{
                      backgroundColor: `var(--clr-s-${s.ID - 1})`,
                      color: s.ID - 1 < 2 ? `` : `#fff`,
                    }}
                  ></div>
                  <div className="shift-name">{s.Name}</div>
                </div>
              ))}
          </div>
          <div className="col">
            <div className="mt-3 ">
              Choosen shifts: <span>{countShift}</span>
            </div>
            <div className="mt-2">
              <button className="btn text-black" onClick={handleSave}>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assign;
