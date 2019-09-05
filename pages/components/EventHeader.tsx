import Time from '../../models/Time';

const EventHeader = props => {
  return (
    <div id="event-header" className="content">
      <hr />
      <p>
        {new Time(props.from.hour, props.from.minute).toString()} - {new Time(props.to.hour, props.to.minute).toString()} {props.type}
      </p>
    </div>
  );
};

export default EventHeader;
