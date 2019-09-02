import "../../styling/scheduleStyles.scss";
import Link from 'next/link';
import { auth } from '../../firebase'

const Talk = props => {
  return (
    <div>
      <span className="room-header">
        <span>
          {"Room " + props.talk.room}
        </span>
      </span>
      <h3 id="title" >
        <Link href={"./talksAndSpeakers#" + props.talk.id}><a>{props.talk.name}</a></Link>
      </h3>
      <p id="speaker">
        <Link href={"./talksAndSpeakers#" + props.talk.id}><a>{props.talk.speaker.name}</a></Link>
      </p>
      <div className="talk-info">
        <p id="room" className="info-entry">
          {props.talk.room}
        </p>
        <p id="type" className="info-entry">
          {props.talk.type}
        </p>
        <p id="language" className="info-entry">
          {props.talk.language}
        </p>
        <p id="difficulty" className="info-entry">
          {props.talk.difficulty}
        </p>
      </div>
      <div className="speaker-page">
        <h3 id="speaker-edit" >
          {
            auth.currentUser.uid === props.talk.owner && <Link href={"./editTalk?id=" + props.talk.id}><a>edit</a></Link>
          }
        </h3>
        <h2 id="talk-speaker"> {props.talk.speaker.name} </h2>
        <p id="talk-speakerinfo"> {props.talk.speaker.info} </p>
        <h2 id="talk-title"> {props.talk.name} </h2>
        <p id="talk.description"> {props.talk.description}</p>
        <br />
        <p id="talk.type">{props.talk.type}</p>
        <p id="talk.language">{props.talk.language}</p>
        <p id="talk.difficulty">{props.talk.difficulty}</p>
        <div id="tag-list">
          <p>Tags:</p>
          <ul>
            {props.talk.tags.map((tag, i) => <li key={tag} id="tags-list-entry">{props.talk.tags[i]}</li>)}
          </ul>
        </div>
        <hr />
      </div>
    </div>
  );
};


export default Talk;
