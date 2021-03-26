import { CSSProperties } from "react";
import { colorClassFromRoomName } from "../helpers";
import { Pin } from "../components";

import "../styling/roomStyles.scss";

interface RoomProps {
  index?: any;
  room: any;
  showRoomHeader: boolean;
  children: any;
}

const Room = ({ index, room, showRoomHeader, children }: RoomProps) => {
  const color = colorClassFromRoomName(room);

  const style = {
    msGridColumn: index + 1,
    msGridRow: 1,
  };

  return (
    <>
      {showRoomHeader && (
        <div
          className={`room-header ${index % 2 == 0 ? "room-even" : "room-odd"}`}
          style={style as CSSProperties}
        >
          <Pin className={color} small={true} />
          <div className="room-header-text">{room}</div>
        </div>
      )}

      {children}
    </>
  );
};

export default Room;
