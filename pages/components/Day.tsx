import { Component } from "react";
import EventHeader from './EventHeader';
import ScheduleEntry from './ScheduleEntry';
import Talk from '../../models/Talk';
import Timeslot from "../../models/Timeslot";

interface IProps {
  draggingTalk?: boolean
  day: any
  slots: any[]
  tags: string[]
  updateIndices?: (slot, room, talk) => void
  onToggleTag?: (val) => void
  onStartDrag?: (talk: Talk, x: number, y: number) => void,
  onChange?: (val: any) => void,
  onRemove?: () => void,
  addTalks?: (talks: Talk[]) => void
}
class Day extends Component<IProps, any> {

  longestTrack(slot): number {

    const res = Math.max(...(slot.rooms && slot.rooms.map(room =>
      room.talks && room.talks.filter(talk => !talk.hide).length)));

    return Math.max(res, 0) + (this.props.draggingTalk ? 1 : 0);
  }

  updateSlots(index: number, timeslot: Timeslot) {
    console.log(timeslot);
    this.props.day.timeslots[index] = timeslot;
    this.props.onChange(this.props.day);
  }

  onTimeslotRemoved(timeslotIndex: number) {
    //const removed = this.props.day.timeslots.splice(timeslotIndex, 1)[0];
    //const talks = removed.rooms.map(room => room.talks).flat(Infinity);
    //this.props.addTalks(talks);
    //this.props.onChange(this.props.day);
  }

  render() {
    return (
      <div className="day">
        {this.props.slots && this.props.slots.map((slot, i) =>
          <div key={i + "slot"} className="slot">
            <EventHeader key={i + "slot"} timeStart={slot.from} timeEnd={slot.to} type={slot.type} day={this.props.day.day} />
            {slot.rooms && <ScheduleEntry
              updateIndices={(room, index) => this.props.updateIndices && this.props.updateIndices(i, room, index)}
              addTalks={this.props.addTalks}
              onRemove={this.onTimeslotRemoved && this.onTimeslotRemoved.bind(this, i)}
              onChange={this.updateSlots && this.updateSlots.bind(this, i)}
              onStartDrag={this.props.onStartDrag}
              draggingTalk={this.props.draggingTalk}
              day={this.props.day.day}
              onToggleTag={this.props.onToggleTag}
              tags={this.props.tags}
              slot={slot}
              showRoomHeader={true}
              trackLength={this.longestTrack(slot)} />}
          </div>
        )}
      </div>
    );
  }
}

export default Day;
