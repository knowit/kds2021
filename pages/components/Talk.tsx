import '../../styling/talkStyles.scss';
import FilterTag from './FilterTag';
import Difficulty from './Difficulty';
import dynamic from "next/dynamic";
import Pin from './Pin';
import React from 'react';
import { colorFromRoomName } from '../../helpers/colors';

const FavouriteTalkButtonNoSSR = dynamic(() => import("./FavouriteTalkButton"), {
  ssr: false
});



class Talk extends React.Component<any, any> {
  render() {
    return (
      <div className="talk">
        <div className="header">
          <div className="time">
            {this.props.day}<br></br>
            {this.props.timeStart} - {this.props.timeEnd}
          </div>
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

        {this.props.tags && this.props.tags.map(tag => <FilterTag key={tag} name={tag}></FilterTag>)}
        <hr/>
      </div>
    );
  }
}

export default Talk;
