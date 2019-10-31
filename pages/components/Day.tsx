import { Component } from "react";
import EventHeader from './EventHeader';
import ScheduleEntry from './ScheduleEntry';
import Talk from '../../models/Talk';
import Timeslot from "../../models/Timeslot";
import Time from "../../models/Time";
import Room from "../../models/Room";

interface IProps {
  draggingTalk?: boolean
  day: any
  slots: any[]
  tags: string[]
  edit?: boolean
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

  onTimeslotRemoved(timeslotIndex: number) {
    const removed = this.props.day.timeslots.splice(timeslotIndex, 1)[0];
    const talks = removed.rooms.map(room => room.talks).flat(Infinity);
    this.props.onChange(this.props.day);
    this.props.addTalks(talks);
  }

  timeslotUpdate = (index: number, timeslot) => {
    this.props.day.timeslots[index] = timeslot;
    this.props.onChange(this.props.day);
  }

  render() {
    return (
      <div className="day">
        {this.props.slots && this.props.slots.sort((a, b) => Time.compare(a.from, b.from)).map((slot, i) =>
          <div key={i + "slot"} className="slot">
            <EventHeader edit={this.props.edit} key={i + "slot"} timeStart={slot.from} timeEnd={slot.to} type={slot.type} timeslot={slot} day={this.props.day.day} onTimeslotUpdate={(timeslot) => this.timeslotUpdate(i, timeslot)} onRemove={() => this.onTimeslotRemoved(i)} />
            {slot.rooms && <ScheduleEntry
              edit={this.props.edit}
              updateIndices={(room, index) => this.props.updateIndices && this.props.updateIndices(i, room, index)}
              addTalks={this.props.addTalks}
              onRemove={this.onTimeslotRemoved && this.onTimeslotRemoved.bind(this, i)}
              onChange={this.timeslotUpdate && this.timeslotUpdate.bind(this, i)}
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
