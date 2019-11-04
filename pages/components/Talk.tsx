import '../../styling/talkStyles.scss';
import FilterTag from './FilterTag';
import Difficulty from './Difficulty';
import dynamic from "next/dynamic";
import Pin from './Pin';
import React from 'react';
import Link from 'next/link';
import { colorClassFromRoomName } from '../../helpers/colors';
import { auth } from '../../firebase_utils';
import { dayOfWeek } from '../../helpers/dateUtils';

const FavouriteTalkButtonNoSSR = dynamic(() => import("./FavouriteTalkButton"), {
  ssr: false
});



class Talk extends React.Component<any, any> {
  isOwner = () => {
    const uid = auth.currentUser && auth.currentUser.uid;
    return this.props.talk.speaker.id === uid || this.props.talk.cospeakers.any(speaker => speaker.id === uid);
  }

  render() {
    return (
      <div className="talk" onMouseDown={(evt) => {
        this.props.edit && this.props.onStartDrag && evt.preventDefault();
        this.props.edit && this.props.onStartDrag && this.props.onStartDrag(this.props.talk, evt.clientX, evt.clientY);
      }}>
        {!this.props.edit && this.isOwner() && <div className="talk-owner-info">
          You are a speaker or cospeaker for this talk. You can edit the talk <Link href={"/editTalk?id=" + this.props.talk.id}><a>here</a>
          </Link>
        </div>}
        <div className="header">
          <div className="time">
            <div className="wrapper">
              <img src="../../static/clock.svg" width="24" height="24" />
            </div>
            <span className="time-text">
              <span className="time-text-day">{this.props.day && dayOfWeek(this.props.day)}<br></br></span>
              {this.props.timeStart && this.props.timeStart.toTimeString().slice(0, 5)} - {this.props.timeEnd && this.props.timeEnd.toTimeString().slice(0, 5)}
            </span>
          </div>
          <div className="room">
            <div className="wrapper">
              <Pin className={colorClassFromRoomName(this.props.room)}></Pin>
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
          <div className="heart">
            <FavouriteTalkButtonNoSSR talkId={this.props.id} onClick={this.props.onFavoriteChange} />
          </div>
        </div>
        <div className="talk-content">
          <p className="day">{this.props.day && this.props.day.getDay()}</p>
          <p className="time-info">{this.props.timeStart && this.props.timeStart.toTimeString().slice(0, 5)} - {this.props.timeEnd && this.props.timeEnd.toTimeString().slice(0, 5)}
            <span className="duration">
              &nbsp;({this.props.talk.duration} min)
            </span>
          </p>
          <p className="type-info">{this.props.type}
            <span className="duration">
              &nbsp;({this.props.talk.duration} min)
            </span></p>
          <h1 className="title">{this.props.talk.name}</h1>
          <p className="speaker">{this.props.speaker}</p>
          <p className="info">{this.props.speakerInfo}</p>
          <div className="tags">
            {this.props.tags && this.props.tags.concat([this.props.language]).map(tag => <FilterTag key={tag} name={tag} selected={this.props.selectedTags && this.props.selectedTags.indexOf(tag) > -1} onClick={() => this.props.onToggleTag && this.props.onToggleTag(tag)}></FilterTag>)}
          </div>
          <hr className="seperator" />
        </div>
      </div>
    );
  }
}

export default Talk;
