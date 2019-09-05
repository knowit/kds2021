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
    onChange: (val: any) => void,
    onRemove: () => void
}

interface IState {
    editMode: boolean,
    insertIndex: number
}

class ProgramBuilderRoom extends React.Component<IProps, IState> {
    constructor(props) {
        super(props);

        this.state = {
            editMode: false,
            insertIndex: 0
        }

        // Bind creates a new object and we only want one function
        this.onTalkDropped = this.onTalkDropped.bind(this);
    }

    onTalkDropped(talk: Talk) {
        this.props.room.talks.splice(this.state.insertIndex, 0, talk);
        this.props.onChange(this.props.room);
    }

    startDrag(talk: Talk, x: number, y: number) {
        const index = this.props.room.talks.indexOf(talk);
        this.props.room.talks = this.props.room.talks.slice(0, index).concat(this.props.room.talks.slice(index + 1));
        this.props.onChange(this.props.room);
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
        const duration = this.props.room.talks.reduce((acc: number, x: Talk) => {
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
        this.props.room.name = val;
        this.props.onChange(this.props.room);
    }

    updateInsertIndex(index: number) {
        this.setState({
            insertIndex: index
        });
    }

    render() {
        return (
            <div className={`room ${this.isFull() ? 'full-room' : ''}`} onMouseEnter={() => this.props.timeslotCallbackSetter(this.onTalkDropped)} onMouseLeave={() => this.props.timeslotCallbackSetter(null)}>
                <button className="remove-button" onClick={() => this.props.onRemove()}>remove</button>
                {!this.state.editMode && <p>{this.props.room.name} <span onClick={() => this.setEditMode()}>edit</span></p>}
                {this.state.editMode && <div>
                    <input type="text" onChange={(evt) => this.updateName(evt.target.value)} defaultValue={this.props.room.name} />
                    <button onClick={() => this.save()}>save</button>
                </div>}

                {this.props.room.talks.map((talk, i) =>
                    <div key={i}>
                        <TalkView talk={talk} onStartDrag={this.startDrag.bind(this)} onMouseEnter={this.updateInsertIndex.bind(this, i + 1)} onMouseLeave={this.updateInsertIndex.bind(this, 0)}></TalkView>
                    </div>
                )}
            </div>
        );
    }
}

export default ProgramBuilderRoom;