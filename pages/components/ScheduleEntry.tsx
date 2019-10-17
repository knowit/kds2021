import Talk from "./Talk";
import { Component, CSSProperties } from "react";
import dynamic from "next/dynamic";
import Room from './Room';
import { getDuration, Time, createDate } from '../../helpers/time';

interface IProps {
  day: Date
  slot: any
  showRoomHeader: boolean,
  tags: string[],
  trackLength: number,
  onToggleTag: (val) => void
}
class ScheduleEntry extends Component<IProps, any> {
  constructor(props) {
    super(props);
  }

  createRoom(room, index: number) {
    let from = new Time(this.props.slot.from.hours, this.props.slot.from.minutes); 
    let trackIndex = 0;
    const talks = room.talks
      .map((talk) => {
        const to = from.copy().add(getDuration(talk.type));
        
        const style = { // For ie support, ie support is far from good.. but this makes i maybe useable
          msGridRow: trackIndex + 2,
          msGridColumn: index + 1
        };

        const talkEl = (<div className={`talk-container ${trackIndex % 2 == 0 ? 'talk-even' : 'talk-odd'} ${index % 2 == 0 ? 'room-even' : 'room-odd'}`} key={talk.id} style={style as CSSProperties}>
          <Talk title={talk.name}
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
      talks.push(<div className={`talk-container empty ${talkIndex % 2 == 0 ? 'talk-even' : 'talk-odd'} ${index % 2 == 0 ? 'room-even' : 'room-odd'}`} key={i}></div>);
    }

    return talks;
  }

  render() {
    if (this.props.slot && this.props.slot.rooms && this.props.slot.rooms.length == 1) {
      const room = this.props.slot.rooms[0];
      return (
        <div className="rooms single-track">
          {this.props.slot.rooms && <Room key={room.name} showRoomHeader={false} room={room}>{
            this.createRoom(room, 0)
          }</Room>}
        </div>);
    }
    else if (this.props.slot && this.props.slot.rooms && this.props.slot.rooms.length > 1) {
      // Need to update dimensions of the grid
      const style = {
        gridTemplateColumns: `repeat(${this.props.slot && this.props.slot.rooms && this.props.slot.rooms.length}, 1fr)`,
        gridTemplateRows: `60px ${this.props.trackLength > 0 ? `repeat(${this.props.trackLength}, 1fr)` : ''}`,
        msGridRows: `60px  ${this.props.trackLength > 0 ? `(1fr)[${this.props.trackLength}]` : ''}`,
        msGridColumns: `(1fr) [${this.props.slot && this.props.slot.rooms && this.props.slot.rooms.length}]`
      };

      return (
        <div className="rooms multi-track" style={style}>
          {this.props.slot && this.props.slot.rooms && this.props.slot.rooms.map((r, i) => <Room key={i} index={i} showRoomHeader={this.props.showRoomHeader} room={r.name}>
            {
              this.createRoom(r, i)
            }
          </Room>)}
        </div>
      );
    }
    return "";
  }
};

export default ScheduleEntry;
