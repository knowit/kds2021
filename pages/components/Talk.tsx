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
            <div className="wrapper">
              <img src="../../static/clock.svg" width="24" height="24" />
            </div>
            <span className="time-text">
              <span className="time-text-day">{this.props.day}<br></br></span>
              {this.props.timeStart.toString()} - {this.props.timeEnd.toString()}
            </span>
          </div>
          <div className="room">
            <div className="wrapper">
              <Pin color={colorFromRoomName(this.props.room)}></Pin>
            </div>
            <span className="text room-name">
              Room {this.props.room}
            </span>
          </div>
          <div className="diff">
            <div className="wrapper">
              <Difficulty difficulty={this.props.difficulty}></Difficulty>
            </div>
            <span className="text diff-name">
              {this.props.difficulty}
            </span>
          </div>
          <div className="text heart">
            <FavouriteTalkButtonNoSSR talkId={this.props.id} onClick={this.props.onFavoriteChange} />
          </div>
        </div>
        <div className="talk-content">
          <p className="day">{this.props.day}</p>
          <p className="time-info">{this.props.timeStart.toString()} - {this.props.timeEnd.toString()}</p>
          <p className="type-info">{this.props.type}</p>
          <h1 className="title">{this.props.title}</h1>
          <p className="speaker">{this.props.speaker}</p>
          <p className="info">{this.props.speakerInfo}</p>
          <div className="tags">
            {this.props.tags && this.props.tags.concat([this.props.language]).map(tag => <FilterTag key={tag} name={tag} selected={this.props.selectedTags.indexOf(tag) > -1} onClick={() => this.props.onToggleTag(tag)}></FilterTag>)}
          </div>
          <hr className="seperator" />
        </div>
      </div>
    );
  }
}

export default Talk;
