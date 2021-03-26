import { CSSProperties } from "react";
import { Room, Talk } from "../components";
import { getDuration, Time } from "../helpers";

interface ScheduleEntryProps {
  day: string;
  slot: any;
  showRoomHeader: boolean;
  tags: string[];
  trackLength: number;
  onToggleTag: (val) => void;
}

const ScheduleEntry = ({
  day,
  slot,
  showRoomHeader,
  tags,
  trackLength,
  onToggleTag,
}: ScheduleEntryProps) => {
  const createRoom = (room, index) => {
    let from = Time.fromNumber(slot.timeStart);
    let trackIndex = 0;
    const talks = room.talks.map((talk) => {
      trackIndex++; //DETTE ER NYTT, FJERN HVIS DET TRYNER
      const style = {
        msGridRow: trackIndex + 2,
        msGridColumn: index + 1,
      };
      const to = from.copy().add(getDuration(talk));
      const talkEl = (
        <div
          className={`talk-container ${
            trackIndex % 2 == 0 ? "talk-even" : "talk-odd"
          } ${index % 2 == 0 ? "room-even" : "room-odd"}`}
          key={trackIndex}
          style={style as CSSProperties}
        >
          <Talk
            visibility={!talk.hide}
            day={day}
            timeStart={from}
            timeEnd={to}
            room={room.name}
            difficulty={talk.difficulty}
            id={talk.talkId}
            type={talk.type}
            title={talk.title}
            speaker={talk.speakers}
            tags={talk.tags}
            selectedTags={tags}
            language={talk.language}
            onToggleTag={onToggleTag}
            key={trackIndex}
          />
        </div>
      );

      from = to;

      if (!talk.hide) {
        trackIndex++;
      }

      return talkEl;
    });

    const numHidden = room.talks.filter((talk) => !talk.hide).length;
    //to popultate in the case where there are more talks in a given room than the other rooms.
    for (let i = 0; i < trackLength - numHidden; i++) {
      const talkIndex = trackIndex + i;
      talks.push(
        <div
          className={`talk-container empty ${
            talkIndex % 2 == 0 ? "talk-even" : "talk-odd"
          } ${index % 2 == 0 ? "room-even" : "room-odd"}`}
          key={i}
        />
      );
    }

    return talks;
  };

  if (slot && slot.rooms && slot.rooms.length == 1) {
    const room = slot.rooms[0];
    return (
      <div className="rooms single-track">
        {slot.rooms && (
          <Room key={room.name} showRoomHeader={false} room={room}>
            {
              createRoom(room, 0) ///TODO
            }
          </Room>
        )}
      </div>
    );
  } else {
    // Need to update dimensions of the grid
    const style = {
      gridTemplateColumns: `repeat(${
        slot && slot.rooms && slot.rooms.length
      }, 1fr)`,
      gridTemplateRows: `60px ${
        trackLength > 0 ? `repeat(${trackLength}, 1fr)` : ""
      }`,
      msGridRows: `60px  ${trackLength > 0 ? `(1fr)[${trackLength}]` : ""}`,
      msGridColumns: `(1fr) [${slot && slot.rooms && slot.rooms.length}]`,
    };

    return (
      <div className="rooms multi-track" style={style}>
        {slot &&
          slot.rooms &&
          slot.rooms.map((r, i) => (
            <Room
              key={r.name}
              index={i}
              showRoomHeader={showRoomHeader}
              room={r.name}
            >
              {createRoom(r, i)}
            </Room>
          ))}
      </div>
    );
  }
};

export default ScheduleEntry;
