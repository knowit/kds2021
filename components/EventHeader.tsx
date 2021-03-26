import React from "react";

interface EventHeaderProps {
  type: any;
  timeStart: any;
  timeEnd: any;
}

const EventHeader = ({ type, timeStart, timeEnd }: EventHeaderProps) => {
  return (
    <div className="event-header">
      <span className="type">{type}</span>
      <span className="time">
        {timeStart} - {timeEnd}
      </span>
    </div>
  );
};

export default EventHeader;
