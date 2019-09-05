import React from 'react';
import Room from '../../models/Room';
import Talk from '../../models/Talk';
import Timeslot from '../../models/Timeslot';
import TalkView from './ProgramBuilderTalk';

interface IProps {
    room: Room,
    duration: number, // in minutes
    timeslotCallbackSetter: (cb: (talk: Talk) => void) => void,
    onStartDrag: (talk: Talk, x: number, y: number) => void,
    onChange: (val: any) => void
}

interface IState {
    room: Room,
    editMode: boolean,
    insertIndex: number
}

class ProgramBuilderRoom extends React.Component<IProps, IState> {
    constructor(props) {
        super(props);

        this.state = {
            editMode: false,
            room: this.props.room || new Room(),
            insertIndex: 0
        }

        // Bind creates a new object and we only want one function
        this.onTalkDropped = this.onTalkDropped.bind(this);
    }

    onTalkDropped(talk: Talk) {
        console.log(this.state.insertIndex);
        this.setState((prev) => {
            prev.room.talks.splice(prev.insertIndex, 0, talk);
            return prev;
        }, () => this.props.onChange(this.state.room));
    }

    startDrag(talk: Talk, x: number, y: number) {
        this.setState((prev) => {
            const index = prev.room.talks.indexOf(talk);
            prev.room.talks = prev.room.talks.slice(0, index).concat(prev.room.talks.slice(index + 1));
            return prev;
        }, () => this.props.onChange(this.state.room));
        this.props.onStartDrag(talk, x, y);
    }


    // TODO: rewrite so duration is stored in the db
    public getDuration(talk: Talk): number {
        if (talk.type == "Lightning talk") {
            return 10;
        }
        if (talk.type == "Short presentation") {
            return 30;
        }
        if (talk.type == "Long presentation") {
            return 60;
        }
        if (talk.type == "Workshop") {
            return 90;
        }
        return 0;
    }

    isFull() {
        const duration = this.state.room.talks.reduce((acc: number, x: Talk) => {
            acc += this.getDuration(x);
            return acc;
        }, 0);
        return duration > this.props.duration;
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
        }, () => this.props.onChange(this.state.room));
    }

    updateInsertIndex(index: number) {
        this.setState({
            insertIndex: index
        });
    }

    render() {
        return (
            <div className={`room ${this.isFull() ? 'full-room' : ''}`} onMouseEnter={() => this.props.timeslotCallbackSetter(this.onTalkDropped)} onMouseLeave={() => this.props.timeslotCallbackSetter(null)}>
                {!this.state.editMode && <p>{this.state.room.name} <span onClick={() => this.setEditMode()}>edit</span></p>}
                {this.state.editMode && <div>
                    <input type="text" onChange={(evt) => this.updateName(evt.target.value)} defaultValue={this.state.room.name} />
                    <button onClick={() => this.save()}>save</button>
                </div>}

                {this.state.room.talks.map((talk, i) =>
                    <div>
                        <TalkView talk={talk} onStartDrag={this.startDrag.bind(this)} onMouseEnter={this.updateInsertIndex.bind(this, i + 1)} onMouseLeave={this.updateInsertIndex.bind(this, 0)}></TalkView>
                    </div>
                )}
            </div>
        );
    }
}

export default ProgramBuilderRoom;