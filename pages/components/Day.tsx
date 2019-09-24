import { Component } from "react";
import EventHeader from './EventHeader';
import ScheduleEntry from './ScheduleEntry';

interface IProps {
  currDay: any
  slots: any[]
  rooms: string[]
  tags: string[]
  onToggleTag: (val) => void
}
class Day extends Component<IProps, any> {
  render() {
    console.log(this.props);
    return (
      <div className="day">
        {this.props.slots && this.props.slots.map((slot, i) =>
        <div key={i + "slot"} className="slot">
          <EventHeader key={i + "slot"} timeStart={slot.timeStart} timeEnd={slot.timeEnd} type={slot.type} />
          {slot.rooms && <ScheduleEntry day={this.props.currDay.day} onToggleTag={this.props.onToggleTag} tags={this.props.tags} slot={slot} rooms={this.props.rooms} showRoomHeader={i==0}/>}
        </div>
         )}
      </div>
    );
  }
}

export default Day;
