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
            <img src="../../static/clock.svg" width="24" height="24"/>
            <span className="time-text">
              {this.props.day}<br></br>
              {this.props.timeStart.toString()} - {this.props.timeEnd.toString()}
            </span>
          </div>
          <div className="room">
            <Pin color={colorFromRoomName(this.props.room)}></Pin>
            <span className="room-name">
              Room {this.props.room}
            </span>
          </div>
          <div className="diff">
            <Difficulty difficulty={this.props.difficulty}></Difficulty>
            <span className="diff-name">
              {this.props.difficulty}
            </span>
          </div>
          <div className="heart">
            <FavouriteTalkButtonNoSSR talkId={this.props.id} />
          </div>
        </div>
        <p className="day">{this.props.day}</p>
        <p className="time-info">{this.props.timeStart.toString()} - {this.props.timeEnd.toString()}</p>
        <p className="type-info">{this.props.type}</p>
        <h1 className="title">{this.props.title}</h1>
        <p className="speaker">{this.props.speaker}</p>
        <p className="info">{this.props.speakerInfo}</p>

        {this.props.tags && this.props.tags.map(tag => <FilterTag key={tag} name={tag} selected={this.props.selectedTags.includes(tag)} onClick={() => this.props.onToggleTag(tag)}></FilterTag>)}
        <hr className="seperator"/>
      </div>
    );
  }
}

export default Talk;
