import { Component } from "react";
import ShowDailySchedule from "./ShowDailySchedule";
import DayButton from './DayButton';
import EventHeader from './EventHeader';
import ScheduleEntry from './ScheduleEntry';

interface IProps {
  currDay: string;
  slots: any[];
}
class Day extends Component<IProps, any> {

  render() {
    return (
      <div className="day">
        {this.props.slots.map((slot, i) =>
        <div key={i + "slot"} className="slot">
          <EventHeader key={i + "slot"} timeStart={slot.timeStart} timeEnd={slot.timeEnd} type={slot.type} />
          {slot.rooms && <ScheduleEntry slot={slot} />}
        </div>
         )}
      </div>
    );
  }
}

export default Day;
