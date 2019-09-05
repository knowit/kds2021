import ScheduleEntry from "./ScheduleEntry";
import DayButton from './DayButton';
import EventHeader from "./EventHeader";


const ShowDailySchedule = props => {
  return (
    <div>
      <DayButton arrow="../../static/arrow_down.svg" day={props.day} showSchedule={props.showSchedule} />
      {props.day.timeslots.map((slot, i) =>
        <div key={i + "slot"}>
          <EventHeader key={i + "slot"} from={slot.from} to={slot.to} />
          {slot.rooms && <ScheduleEntry key={i + 1 + "slot"} slot={slot} />}
        </div>
      )}
    </div>
  );
};



export default ShowDailySchedule;
