import TalkView from "./Talk";
import Talk from "../../models/Talk";
import { Component, CSSProperties } from "react";
import dynamic from "next/dynamic";
import Room from './Room';
import { getDuration, Time, createDate } from '../../helpers/time';
import Timeslot from "../../models/Timeslot";

interface IProps {
  day: Date
  slot: any
  draggingTalk?: boolean
  showRoomHeader: boolean,
  tags: string[],
  trackLength: number,
  edit?: boolean
  onToggleTag: (val) => void,
  updateIndices?: (roomIndex: number, talkIndex: number) => void
  onStartDrag?: (talk: Talk, x: number, y: number) => void,
  onChange?: (val: any) => void,
  onRemove?: () => void,
  addTalks?: (talks: Talk[]) => void
}
class ScheduleEntry extends Component<IProps, any> {
  constructor(props) {
    super(props);
  }

  removeTalk(roomIndex: number, talkIndex: number) {
    this.props.slot.rooms[roomIndex].talks.splice(talkIndex, 1);
    this.props.onChange(this.props.slot);
    return true;
  }

  removeRoom(roomIndex: number) {
    const talks = this.props.slot.rooms[roomIndex].talks;
    this.props.slot.rooms.splice(roomIndex, 1);

    this.props.onChange(this.props.slot);
    this.props.addTalks(talks);
  }

  updateRoom(roomIndex: number, room) {
    this.props.slot.rooms[roomIndex] = room;
    this.props.onChange(this.props.slot);
  }

  createRoom(room, index: number) {

    const duration = room.talks.reduce((acc, talk) => acc += getDuration(talk.type).toMinutes(), 0);

    const full = duration > Time.diff(this.props.slot.from, this.props.slot.to);

    let from = new Time(this.props.slot.from.hours, this.props.slot.from.minutes);
    let trackIndex = 0;
    const talks = room.talks
      .map((talk) => {
        const to = from.copy().add(getDuration(talk.type));

        const style = { // For ie support, ie support is far from good.. but this makes i maybe useable
          msGridRow: trackIndex + 2,
          msGridColumn: index + 1
        };

        const talkIndex = trackIndex;
        const roomIndex = index;

        const talkEl = (<div className={`talk-container ${trackIndex % 2 == 0 ? 'talk-even' : 'talk-odd'} ${index % 2 == 0 ? 'room-even' : 'room-odd'} ${full ? 'full' : ''}`} key={talk.id} style={style as CSSProperties}
          onMouseEnter={() => this.props.updateIndices && this.props.updateIndices(roomIndex, talkIndex)}>
          <TalkView title={talk.name}
            edit={this.props.edit}
            speaker={talk.speaker && talk.speaker.name}
            room={room.name}
            type={talk.type}
            language={talk.language}
            difficulty={talk.difficulty}
            id={talk.id}
            key={talk.id}
            day={this.props.day}
            tags={talk.tags}
            timeStart={createDate(from, this.props.day)}
            timeEnd={createDate(to, this.props.day)}
            onStartDrag={(talk, x, y) => this.props.onStartDrag && this.removeTalk(roomIndex, talkIndex) && this.props.onStartDrag(talk, x, y)}
            talk={talk}
            selectedTags={this.props.tags}
            onToggleTag={this.props.onToggleTag} />
        </div>);

        from = to;

        if (!talk.hide) {
          trackIndex++;
        }

        return !talk.hide ? talkEl : '';
      }
      );

    const numHidden = room.talks.filter(talk => !talk.hide).length;
    for (let i = 0; i < this.props.trackLength - numHidden; i++) {
      const talkIndex = trackIndex + i;
      const roomIndex = index;
      talks.push(<div
        className={`talk-container empty ${talkIndex % 2 == 0 ? 'talk-even' : 'talk-odd'} ${index % 2 == 0 ? 'room-even' : 'room-odd'}`}
        key={i}
        onMouseEnter={() => this.props.updateIndices(roomIndex, talkIndex)}
      ></div>);
    }

    return talks;
  }

  render() {
    if (this.props.slot && this.props.slot.rooms && this.props.slot.rooms.length == 1 && !this.props.edit) {
      const room = this.props.slot.rooms[0];
      return (
        <div className="rooms single-track"
          onMouseLeave={() => this.props.updateIndices(-1, -1)}>
          {this.props.slot.rooms && <Room edit={this.props.edit} key={room.name} showRoomHeader={false} room={room} onRoomUpdate={(talk) => this.updateRoom(0, talk)} onRemove={() => this.removeRoom(0)}>{
            this.createRoom(room, 0)
          }</Room>}
        </div>);
    }
    else if (this.props.slot && this.props.slot.rooms && this.props.slot.rooms.length > 1 || this.props.edit) {
      // Need to update dimensions of the grid
      const style = {
        gridTemplateColumns: `repeat(${this.props.slot && this.props.slot.rooms && this.props.slot.rooms.length}, 1fr)`,
        gridTemplateRows: `60px ${this.props.trackLength > 0 ? `repeat(${this.props.trackLength}, 1fr)` : ''}`,
        msGridRows: `60px  ${this.props.trackLength > 0 ? `(1fr)[${this.props.trackLength}]` : ''}`,
        msGridColumns: `(1fr) [${this.props.slot && this.props.slot.rooms && this.props.slot.rooms.length}]`
      };

      return (
        <div className="rooms multi-track" style={style}
          onMouseLeave={() => this.props.updateIndices && this.props.updateIndices(-1, -1)}>
          {
            this.props.slot && this.props.slot.rooms && this.props.slot.rooms.map((r, i) => 
              <Room edit={this.props.edit} key={i} index={i} showRoomHeader={this.props.showRoomHeader || this.props.edit} room={r} onRoomUpdate={(talk) => this.updateRoom(i, talk)} onRemove={() => this.removeRoom(i)}>
              {
                this.createRoom(r, i)
              }
            </Room>)
          }
        </ div>
      );
    }
    return "";
  }
};

export default ScheduleEntry;
