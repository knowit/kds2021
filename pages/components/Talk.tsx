import '../../styling/talkStyles.scss';
import FilterTag from './FilterTag';
import Difficulty from './Difficulty';
import dynamic from "next/dynamic";
import Pin from './Pin';
import React from 'react';

const FavouriteTalkButtonNoSSR = dynamic(() => import("./FavouriteTalkButton"), {
  ssr: false
});

// Should be tweaked to create more "nice" colors
const colorFromRoomName = roomName => {
  const str = roomName + roomName + roomName + roomName; // Room names tend to be quite short so we put multiple of them togheter
  let hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  var c = (hash & 0x00FFFFFF)
    .toString(16)
    .toUpperCase();

  return "#" + "00000".substring(0, 6 - c.length) + c;
}


class Talk extends React.Component<any, any> {
  render() {
    return (
      <div className="talk">
        <div className="header">
          <div className="room">
            <Pin color={colorFromRoomName(this.props.room)}></Pin>
            Room {this.props.room}
          </div>
          <div className="diff">
            <Difficulty difficulty={this.props.difficulty}></Difficulty>
            {this.props.difficulty}
          </div>
          <div className="heart">
            <FavouriteTalkButtonNoSSR talkId={this.props.id} />
          </div>
        </div>
        <p className="day">{this.props.day}</p>
        {!this.props.minimal && <p className="time">{this.props.timeStart} - {this.props.timeEnd}</p>}
        {!this.props.minimal && <p className="type">{this.props.type}</p>}
        <h1 className="title">{this.props.title}</h1>
        <p className="speaker">{this.props.speaker}</p>
        {!this.props.mininal && <p className="info">{this.props.speakerInfo}</p>}

        {this.props.tags && this.props.tags.map(tag => <FilterTag name={tag}></FilterTag>)}
      </div>
    );
  }
}

export default Talk;
