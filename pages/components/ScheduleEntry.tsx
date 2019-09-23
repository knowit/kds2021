import Talk from "./Talk";
import { Component } from "react";
import dynamic from "next/dynamic";
import Room from './Room';

const FavouriteTalkButtonNoSSR = dynamic(() => import("./FavouriteTalkButton"), {
  ssr: false
});


interface IProps {
  slot: any,
  rooms: string[]
  showRoomHeader: boolean
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
            .map(room => room.talks
              .map((talk, i) => talk.speakers
                .map(speaker =>
                  <div className="talk-container" key={i}>
                    <Talk title={talk.title}
                      speaker={speaker.name}
                      room={room.name}
                      type={talk.type}
                      language={talk.language}
                      difficulty={talk.difficulty}
                      id={talk.talkId}
                      key={i}
                      tags={talk.tags}
                      minimal={true} />
                  </div>
                )))
        }</Room>)}
      </div>
    );
  }
};

export default ScheduleEntry;
