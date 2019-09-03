import React from 'react';
import Room from '../../models/Room';
import Talk from '../../models/Talk';
import Timeslot from '../../models/Timeslot';

interface IProps {
    room: Room,
    timeslotCallbackSetter: (cb : (talk: Talk) => void) => void,
    onStartDrag: (talk: Talk, x: number, y: number) => void,
    onChange: (val: any) => void
}

interface IState {
    room: Room,
    editMode: boolean
}

class ProgramBuilderRoom extends React.Component<IProps, IState> {
    constructor(props) {
        super(props);

        this.state = {
            editMode: false,
            room: new Room()
        }

        // Bind creates a new object and we only want one function
        this.onTalkDropped = this.onTalkDropped.bind(this);
    }

    onTalkDropped(talk: Talk) {
        this.setState((prev) => {
            prev.room.talks.push(talk);
            return prev;
        });
    }

    startDrag(talk: Talk, x: number, y: number) {
        this.setState((prev) => {
            const index = prev.room.talks.indexOf(talk);
            prev.room.talks = prev.room.talks.slice(0, index).concat(prev.room.talks.slice(index + 1)); 
            return prev;
        });
        this.props.onStartDrag(talk, x, y);
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

    updateName(val: string) {
        this.setState((prev) => {
            prev.room.name = val;
            return prev;
        });
    }

    render() {
        return (
                <div className="room" onMouseEnter={() => this.props.timeslotCallbackSetter(this.onTalkDropped)} onMouseLeave={() => this.props.timeslotCallbackSetter(null)}>
                    {!this.state.editMode && <p>{this.state.room.name} <span onClick={() => this.setEditMode()}>edit</span></p>}
                    {this.state.editMode && <div>
                        <input type="text" onChange={(evt) => this.updateName(evt.target.value)}/>
                        <button onClick={() => this.save()}>save</button>
                    </div>}
                    
                    {this.state.room.talks.map(talk => 
                        <p onMouseDown={(evt) => {
                                evt.preventDefault(); 
                                this.startDrag(talk, evt.clientX, evt.clientY);
                            }}>
                            {talk.name}
                        </p>
                    )}
                </div>
        );
    }
}

export default ProgramBuilderRoom;