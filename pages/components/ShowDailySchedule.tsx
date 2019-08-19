import ScheduleEntry from "./ScheduleEntry";
import DayButton from './DayButton';
import EventHeader from "./EventHeader";


const ShowDailySchedule = props => {

  return (
    <div>
      <DayButton arrow="../../static/arrow_down.svg" day={props.day} showSchedule={props.showSchedule} />
      {props.slots.map((slot, i) =>
        <div>
          <EventHeader key={i + "slot"} timeStart={slot.timeStart} timeEnd={slot.timeEnd} type={slot.type} />
          {slot.rooms && <ScheduleEntry key={i + 1 + "slot"} slot={slot} />}
        </div>
      )}
    </div>
  );
};



export default ShowDailySchedule;
