const EventHeader = props => {
  return (
    <div className="event-header">
      <span className="type">{props.type}</span>
      <span className="time">{props.timeStart} - {props.timeEnd}</span>
    </div>
  );
};

export default EventHeader;
