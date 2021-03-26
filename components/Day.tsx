import React from "react";
import { EventHeader, ScheduleEntry } from "../components";

interface DayProps {
  currDay: any;
  slots: any[];
  tags: string[];
  onToggleTag: (val) => void;
}

const Day = ({ currDay, slots, tags, onToggleTag }: DayProps) => {
  const longestTrack = (slot) => {
    return Math.max(
      ...(slot.rooms &&
        slot.rooms.map(
          (room) => room.talks && room.talks.filter((talk) => !talk.hide).length
        ))
    );
  };

  return (
    <div className="day">
      {slots &&
        slots.map((slot, i) => (
          <div key={i + "slot"} className="slot">
            <EventHeader
              key={i + "slot"}
              timeStart={slot.timeStart}
              timeEnd={slot.timeEnd}
              type={slot.type}
            />
            {slot.rooms && (
              <ScheduleEntry
                day={currDay.day}
                onToggleTag={onToggleTag}
                tags={tags}
                slot={slot}
                showRoomHeader={true}
                trackLength={longestTrack(slot)}
              />
            )}
          </div>
        ))}
    </div>
  );
};

export default Day;
