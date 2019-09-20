import Talk from "./Talk";
import { Component } from "react";
import dynamic from "next/dynamic";

const FavouriteTalkButtonNoSSR = dynamic(() => import("./FavouriteTalkButton"), {
  ssr: false
});


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
        {this.props.slot && this.props.slot.rooms && this.props.slot.rooms.map(room => room.talks
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
                  tags={talk.tags}
                  minimal={true}/>
              </div>
            )))}
      </div>
    );
  }
};

export default ScheduleEntry;
