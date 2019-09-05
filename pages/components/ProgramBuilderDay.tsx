import React from 'react';
import Day from '../../models/Day'
import Talk from '../../models/Talk'
import Timeslot from '../../models/Timeslot';
import TimeslotView from './ProgramBuilderTimeslot';
import { string } from 'prop-types';

interface IProps {
    day: Day,
    timeslotCallbackSetter: (cb: (talk: Talk) => void) => void,
    onStartDrag: (talk: Talk, x: number, y: number) => void,
    onChange: (val: any) => void,
    onRemove: () => void,
    addTalks: (talks: Talk[]) => void
}

interface IState {
    editMode: boolean
}

class ProgramBuilderDay extends React.Component<IProps, IState> {
    constructor(props) {
        super(props);

        this.state = {
            editMode: false
        }
    }

    formatDay(date: Date) {
        const options = { weekday: 'long', month: 'long', day: 'numeric' };
        return date.toLocaleDateString("en-US", options);
    }

    addSlot() {
        this.props.day.timeslots.push(new Timeslot());
        this.props.onChange(this.props.day);
    }

    updateDate(datestr) {
        this.props.day.day = this.createDate(datestr);
        this.props.onChange(this.props.day);
    }

    setEditMode() {
        this.setState({
            editMode: true
        });
    }

    save() {
        this.setState({
            editMode: false
        });
        // Propagate update 
        this.props.onChange(this.props.day);
    }

    formatDate(date: Date) {
        let str = "";
        str += date.getFullYear();
        str += "-";
        str += ("0" + date.getMonth()).slice(-2);
        str += "-";
        str += ("0" + date.getDate()).slice(-2);
        return str;
    }

    createDate(datestr: string) {
        return new Date(datestr);
    }

    updateSlots(index: number, timeslot: Timeslot) {
        this.props.day.timeslots[index] = timeslot;
        this.props.onChange(this.props.day);
    }

    onTimeslotRemoved(timeslotIndex: number) {
        const removed = this.props.day.timeslots.splice(timeslotIndex, 1)[0];
        const talks = removed.rooms.map(room => room.talks).flat(Infinity);
        this.props.addTalks(talks);
        this.props.onChange(this.props.day);
    }

    render() {
        return (
            <div className="day">
                <button className="remove-button" onClick={() => this.props.onRemove()}>remove</button>
                {!this.state.editMode && <h3>{this.formatDay(this.props.day.day)}<span onClick={() => this.setEditMode()}>&nbsp;&nbsp;edit</span></h3>}
                {this.state.editMode && <div>
                    <input type="date" onChange={(evt) => this.updateDate(evt.target.value)} defaultValue={this.formatDate(this.props.day.day)} />
                    <button onClick={() => this.save()}>save</button>
                </div>}
                <div className="timeslots">
                    {this.props.day.timeslots.map((timeslot, i) => <TimeslotView
                        key={i}
                        addTalks={this.props.addTalks}
                        onRemove={this.onTimeslotRemoved.bind(this, i)}
                        onChange={this.updateSlots.bind(this, i)}
                        timeslotCallbackSetter={this.props.timeslotCallbackSetter}
                        onStartDrag={this.props.onStartDrag}
                        timeslot={timeslot}></TimeslotView>)}
                </div>

                <button className="add-button" onClick={() => this.addSlot()}>
                    Add slot
                </button>
            </div>
        );
    }
}

export default ProgramBuilderDay;