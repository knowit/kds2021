import React from "react";

interface DayButtonProps {
  showSchedule: (val) => void;
  arrow: any;
  day: any;
}

const DayButton = ({ showSchedule, arrow, day }: DayButtonProps) => {
  return (
    <button className="day-button" type="submit" onClick={showSchedule}>
      <h2>{day}</h2>
      <div className="right-arrow">
        <img className="baseline-chevron" src={arrow} />
      </div>
    </button>
  );
};

export default DayButton;
