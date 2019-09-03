import React from 'react';
import Room from '../../models/Room';
import Talk from '../../models/Talk';
import Time from '../../models/Time';
import Timeslot from '../../models/Timeslot';
import RoomView from './ProgramBuilderRoom';

interface IProps {
    timeslot: Timeslot
    timeslotCallbackSetter: (cb : (talk: Talk) => void) => void,
    onStartDrag: (talk: Talk, x: number, y: number) => void,
    onChange: (val: any) => void
}

interface IState {
    timeslot: Timeslot,
    editMode: boolean
}

class ProgramBuilderTimeslot extends React.Component<IProps, IState> {
    constructor(props) {
        super(props);

        this.state = {
            editMode: false,
            timeslot: new Timeslot()
        }
    }

    addRoom() {
        this.setState((prev) => {
            prev.timeslot.rooms = prev.timeslot.rooms.concat([new Room()]); 
            return prev;
        }); 
        
        this.props.onChange(this.state.timeslot);
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
        this.setState((prev) => {
            prev.timeslot.from = Time.parse(timestr);
            return prev;
        });
        this.props.onChange(this.state.timeslot);
    }

    updateTo(timestr: string) {
        this.setState((prev) => {
            prev.timeslot.to = Time.parse(timestr);
            return prev;
        });
        this.props.onChange(this.state.timeslot);
    }

    updateRoom(index: number, room: Room) {
        this.setState((prev) => {
            prev.timeslot.rooms[index] = room;
            return prev;
        });
    }

    render() {
        return (
            <div className="timeslot">
                {!this.state.editMode && <p>{this.props.timeslot.from.toString()} - {this.props.timeslot.to.toString()} <span onClick={() => this.setEditMode()}>edit</span></p> }
                {this.state.editMode && <div>
                    <input type="time" onChange={(evt) => this.updateFrom(evt.target.value)} defaultValue={this.props.timeslot.from.toString()}/> 
                    - 
                    <input type="time" onChange={(evt) => this.updateTo(evt.target.value)} defaultValue={this.props.timeslot.to.toString()}/> <button onClick={() => this.save()}>Save</button>
                </div>}
                <div className="rooms">
                    { this.state.timeslot.rooms.map((room, i) => 
                        <RoomView onChange={this.updateRoom.bind(this, i)} room={room} timeslotCallbackSetter={this.props.timeslotCallbackSetter} onStartDrag={this.props.onStartDrag}></RoomView>)
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