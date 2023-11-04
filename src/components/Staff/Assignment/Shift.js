import React from "react";
import moment from "moment";
import { useDrag } from "react-dnd";

export const Shift = ({ shift, onClick }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "shift",
    item: { id: shift.ID },
    //to determine whether is dragging
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={
        isDragging ? "shift-container row drag" : "shift-container row"
      }
      onClick={() => onClick(shift.ID)}
    >
      <div className="shift-name col">{shift.Name}</div>
      <div className="time col">
        <div>{moment.utc(shift.Begin).format("HH:mm")}</div>
        <div>{moment.utc(shift.End).format("HH:mm")}</div>
      </div>
    </div>
  );
};
