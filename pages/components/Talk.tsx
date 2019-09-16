import '../../styling/talkStyles.scss';
import FilterTag from './FilterTag';
import Difficulty from './Difficulty';
import dynamic from "next/dynamic";
import Pin from './Pin';
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


const Talk = props => {
  return (
    <div className="talk">
      <div className="header">
        <div className="room">
          <Pin color={colorFromRoomName(props.room)}></Pin>
          Room {props.room}
        </div>
        <div className="diff">
          <Difficulty difficulty={props.difficulty}></Difficulty>
          {props.difficulty}
        </div>
        <div className="heart">
          <FavouriteTalkButtonNoSSR talkId={props.id} />
        </div>
      </div>
      <p className="day">{props.day}</p>
      {!props.minimal && <p className="time">{props.timeStart} - {props.timeEnd}</p>}
      {!props.minimal && <p className="type">{props.type}</p>}
      <h1 className="title">{props.title}</h1>
      <p className="speaker">{props.speaker}</p>
      {!props.mininal && <p className="info">{props.speakerInfo}</p>}

      {props.tags.map(tag => <FilterTag name={tag}></FilterTag>)}
    </div>
  );
};


export default Talk;
