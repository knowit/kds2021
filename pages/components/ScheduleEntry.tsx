import Talk from "./Talk";
import EventHeader from "./EventHeader";
import { Component } from "react";
import "../../styling/scheduleStyles.scss";
import FavouriteTalkButton from "./FavouriteTalkButton"


interface IProps {
  slot: any
}
class ScheduleEntry extends Component<IProps, any> {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="talk-slot">
        {this.props.slot.rooms.map(room => room.talks
          .map((talk, i) => talk.speakers
            .map(speaker =>
              <div className="talk-container" key={i}>
                <Talk title={talk.title}
                  speaker={speaker.name}
                  room={room.name}
                  type={talk.type}
                  language={talk.language}
                  difficulty={talk.difficulty}
                  talkId={talk.talkId}
                  key={i} 
                  tags={talk.tags}/>

                <FavouriteTalkButton talkId={talk.talkId} />
              </div>
            )))}
      </div>
    );
  }
};

export default ScheduleEntry;
