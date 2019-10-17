import React from 'react';
import Room from '../../models/Room';
import Talk from '../../models/Talk';
import Time from '../../models/Time';
import Timeslot from '../../models/Timeslot';
import RoomView from './ProgramBuilderRoom';

interface IProps {
    timeslot: Timeslot
    timeslotCallbackSetter: (cb: (talk: Talk) => void) => void,
    onStartDrag: (talk: Talk, x: number, y: number) => void,
    onChange: (val: any) => void,
    onRemove: () => void,
    addTalks: (talks: Talk[]) => void
}

interface IState {
    editMode: boolean
}

class ProgramBuilderTimeslot extends React.Component<IProps, IState> {
    constructor(props) {
        super(props);

        this.state = {
            editMode: false,
        }
    }

    addRoom() {
        this.props.timeslot.rooms.push(new Room);

        this.props.onChange(this.props.timeslot);
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
    }

    updateFrom(timestr: string) {
        this.props.timeslot.from = Time.parse(timestr);
        this.props.onChange(this.props.timeslot);
    }

    updateTo(timestr: string) {
        this.props.timeslot.to = Time.parse(timestr);
        this.props.onChange(this.props.timeslot);
    }

    updateType(str: string) {
        this.props.timeslot.type = str;
        this.props.onChange(this.props.timeslot);
    }

    updateRoom(index: number, room: Room) {
        this.props.timeslot.rooms[index] = room;
        this.props.onChange(this.props.timeslot);
    }

    getDuration() {
        const from = this.props.timeslot.from.hours * 60 + this.props.timeslot.from.minutes;
        const to = this.props.timeslot.to.hours * 60 + this.props.timeslot.to.minutes;

        return to - from;
    }

    onRoomRemoved(roomIndex: number) {
        const removed = this.props.timeslot.rooms.splice(roomIndex, 1)[0];
        this.props.addTalks(removed.talks);
        this.props.onChange(this.props.timeslot);
    }

    render() {
        return (
            <div className="timeslot">
                <button className="remove-button" onClick={() => this.props.onRemove()}>remove</button>
                {!this.state.editMode &&
                    <p>{new Time(this.props.timeslot.from.hours, this.props.timeslot.from.minutes).toString()} -
                    {new Time(this.props.timeslot.to.hours, this.props.timeslot.to.minutes).toString()}
                    &nbsp;{this.props.timeslot.type}
                        &nbsp;<span onClick={() => this.setEditMode()}>edit</span></p>}
                {this.state.editMode && <div>
                    <input type="time" onChange={(evt) => this.updateFrom(evt.target.value)} defaultValue={new Time(this.props.timeslot.from.hours, this.props.timeslot.from.minutes).toString()} />
                    -
                    <input type="time" onChange={(evt) => this.updateTo(evt.target.value)} defaultValue={new Time(this.props.timeslot.to.hours, this.props.timeslot.to.minutes).toString()} /> 
                    <input type="text" onChange={(evt) => this.updateType(evt.target.value)} defaultValue={this.props.timeslot.type}/>
                    <button onClick={() => this.save()}>Save</button>
                </div>}
                <div className="rooms">
                    {this.props.timeslot.rooms.map((room, i) =>
                        <RoomView key={i} onRemove={this.onRoomRemoved.bind(this, i)} duration={this.getDuration()} onChange={this.updateRoom.bind(this, i)} room={room} timeslotCallbackSetter={this.props.timeslotCallbackSetter} onStartDrag={this.props.onStartDrag}></RoomView>)
                    }
                </div>

                <button className="add-button" onClick={() => this.addRoom()}>
                    Add room
                </button>
            </div>
        );
    }
}

export default ProgramBuilderTimeslot;