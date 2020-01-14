import React, {Component} from "react";
import EventHeader from './EventHeader';
import ScheduleEntry from './ScheduleEntry';

interface IProps {
    currDay: any
    slots: any[]
    tags: string[]
    onToggleTag: (val) => void
}

class Day extends Component<IProps, any> {

    longestTrack(slot): number {
        return Math.max(...(slot.rooms && slot.rooms.map(room =>
            room.talks && room.talks.filter(talk => !talk.hide).length)));
    }

    render() {
        return (
            <div className="day">
                {this.props.slots && this.props.slots.map((slot, i) =>
                    <div key={i + "slot"} className="slot">
                        <EventHeader key={i + "slot"} timeStart={slot.timeStart} timeEnd={slot.timeEnd}
                                     type={slot.type}/>
                        {slot.rooms && <ScheduleEntry day={this.props.currDay.day} onToggleTag={this.props.onToggleTag}
                                                      tags={this.props.tags} slot={slot} showRoomHeader={true}
                                                      trackLength={this.longestTrack(slot)}/>}
                    </div>
                )}
            </div>
        );
    }
}

export default Day;
