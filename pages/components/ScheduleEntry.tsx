import Talk from "./Talk";
import { Component } from "react";
import dynamic from "next/dynamic";
import Room from './Room';
import { getDuration, Time } from '../../helpers/time';

const FavouriteTalkButtonNoSSR = dynamic(() => import("./FavouriteTalkButton"), {
  ssr: false
});


interface IProps {
  slot: any,
  rooms: string[]
  showRoomHeader: boolean,
  tags: string[]
  onToggleTag: (val) => void
}
class ScheduleEntry extends Component<IProps, any> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="rooms">
        {this.props.rooms && this.props.rooms.map(r => <Room key={r} showRoomHeader={this.props.showRoomHeader} room={r}>{
          this.props.slot && this.props.slot.rooms
          && this.props.slot.rooms.filter(room => room.name == r)
            .map(room => {
              let from = Time.fromString(this.props.slot.timeStart);
              return room.talks
                .map((talk, i) => talk.speakers
                  .map(speaker => {
                    const to = from.copy().add(getDuration(talk.type));
                    const el = (<div className="talk-container" key={i}>
                      <Talk title={talk.title}
                        speaker={speaker.name}
                        room={room.name}
                        type={talk.type}
                        language={talk.language}
                        difficulty={talk.difficulty}
                        id={talk.talkId}
                        key={i}
                        tags={talk.tags}
                        timeStart={from.copy() /*Make sure we get a copy..*/}
                        timeEnd={to.copy()} 
                        selectedTags={this.props.tags}
                        onToggleTag={this.props.onToggleTag}/>
                    </div>);

                    from = to;

                    return !talk.hide ? el : '';
                  }
                  ))
            }
            )
        }</Room>)}
      </div>
    );
  }
};

export default ScheduleEntry;
