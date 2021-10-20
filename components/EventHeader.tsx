import React from "react";
import { Time } from "../helpers";

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
        {Time.fromNumber(timeStart).toString()} - {Time.fromNumber(timeEnd).toString()}
      </span>
    </div>
  );
};

export default EventHeader;
