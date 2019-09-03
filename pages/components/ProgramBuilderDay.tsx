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
    onChange: (val: any) => void
}

interface IState {
    day: Day,
    editMode: boolean
}

class ProgramBuilderDay extends React.Component<IProps, IState> {
    constructor(props) {
        super(props);

        this.state = {
            day: new Day(),
            editMode: false
        }
    }

    formatDay(date: Date) {
        const options = { weekday: 'long', month: 'long', day: 'numeric'};
        return date.toLocaleDateString("en-US", options);
    }

    addSlot() {
        this.setState((prev) => {
            prev.day.timeslots = prev.day.timeslots.concat([new Timeslot()]); 
            return prev;
        }); 
        // Propagate update  
        this.props.onChange(this.state.day);
    }

    updateDate(datestr) {
        this.setState((prev) => {
            prev.day.day = this.createDate(datestr);
            return prev;
        })
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
        this.props.onChange(this.state.day);
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
        this.setState((prev) => {
            prev.day.timeslots[index] = timeslot;
            return prev;
        });
    }

    render() {
        return (
            <div className="day">
                { !this.state.editMode && <h3>{this.formatDay(this.props.day.day)}<span onClick={() => this.setEditMode()}>&nbsp;&nbsp;edit</span></h3>}
                { this.state.editMode && <div>
                    <input type="date" onChange={(evt) => this.updateDate(evt.target.value)} defaultValue={this.formatDate(this.props.day.day)}/>
                    <button onClick={() => this.save()}>save</button>
                </div>}
                <div className="timeslots">
                    { this.state.day.timeslots.map((timeslot, i) => <TimeslotView onChange={this.updateSlots.bind(this, i)} timeslotCallbackSetter={this.props.timeslotCallbackSetter} onStartDrag={this.props.onStartDrag} timeslot={timeslot}>hei</TimeslotView>)}
                </div>

                <button className="add-button" onClick={() => this.addSlot()}>
                    Add slot
                </button>
            </div>
        );
    }
}

export default ProgramBuilderDay;