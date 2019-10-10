import Talk from "./Talk";
import { Component, CSSProperties } from "react";
import dynamic from "next/dynamic";
import Room from './Room';
import { getDuration, Time } from '../../helpers/time';

interface IProps {
  day: string
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
    let from = Time.fromString(this.props.slot.timeStart);
    const talks = room.talks
      .map((talk, i) => talk.speakers
        .map(speaker => {
          const to = from.copy().add(getDuration(talk.type));


          const style = { // For ie support, ie support is far from good.. but this makes i maybe useable
            msGridRow: i + 2,
            msGridColumn: index + 1
          };

          const talkEl = (<div className={`talk-container ${i % 2 == 0 ? 'talk-even' : 'talk-odd'} ${index % 2 == 0 ? 'room-even' : 'room-odd'}`} key={i} style={style as CSSProperties}>
            <Talk title={talk.title}
              speaker={speaker.name}
              room={room.name}
              type={talk.type}
              language={talk.language}
              difficulty={talk.difficulty}
              id={talk.talkId}
              key={i}
              day={this.props.day}
              tags={talk.tags}
              timeStart={from}
              timeEnd={to}
              selectedTags={this.props.tags}
              onToggleTag={this.props.onToggleTag} />
          </div>);

          from = to;

          return !talk.hide ? talkEl : '';
        }
        ));

    for (let i = 0; i < this.props.trackLength - room.talks.filter(talk => !talk.hide).length; i++) {
      const talkIndex = room.talks.length + i;
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
    else {
      // Need to update dimensions of the grid
      const style = {
        gridTemplateColumns: `repeat(${this.props.slot.rooms && this.props.slot.rooms.length}, 1fr)`,
        gridTemplateRows: `60px repeat(${this.props.trackLength}, 1fr)`,
        msGridRows: `60px (1fr) [${this.props.trackLength}]`,
        msGridColumns: `(1fr) [${this.props.slot.rooms && this.props.slot.rooms.length}]`
      };

      return (
        <div className="rooms multi-track" style={style}>
          {this.props.slot && this.props.slot.rooms && this.props.slot.rooms.map((r, i) => <Room key={r.name} index={i} showRoomHeader={this.props.showRoomHeader} room={r.name}>
            {
              this.createRoom(r, i)
            }
          </Room>)}
        </div>
      );
    }
  }
};

export default ScheduleEntry;
