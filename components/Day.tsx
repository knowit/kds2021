import React from "react";
import { EventHeader, ScheduleEntry } from "../components";

interface DayProps {
  currDay: any;
  slots: any[];
  tags: string[];
  onToggleTag: (val) => void;
  onFavoriteChange: (val) => void;
}

const Day = ({ currDay, slots, tags, onToggleTag, onFavoriteChange }: DayProps) => {
  const longestTrack = (slot) => {
    return Math.max(
      ...(slot.rooms &&
        slot.rooms.map(
          (room) => room.talks && room.talks.filter((talk) => !talk.hide && talk.title !== 'Break').length
        ))
    );
  };

  /**
   * Only talk-events need schedule entries. Used as a check
   */
  const needForScheduleEntry = ((slot) => {
    return slot.rooms && slot.rooms.some((room) => {
      return room.talks != undefined && room.talks.length > 0;
    });
  });

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
            {needForScheduleEntry(slot) && (
              <ScheduleEntry
                day={currDay.day}
                onToggleTag={onToggleTag}
                onFavoriteChange={onFavoriteChange}
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
