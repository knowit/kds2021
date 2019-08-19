const EventHeader = props => {
  return (
    <div id="event-header" className="content">
      <hr />
      <p>
        {props.timeStart} - {props.timeEnd} {props.type}
      </p>
    </div>
  );
};

export default EventHeader;
