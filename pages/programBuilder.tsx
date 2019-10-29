import '../styling/programBuilder.scss';
import { auth, firebase } from '../firebase_utils';
import FirestoreHandler from '../helpers/firestoreHandler'
import React from 'react';
import Layout from './components/Layout';
import DayView from './components/ProgramBuilderDay';
import TalkView from './components/ProgramBuilderTalk';
import Loader from './components/Loader';
import Day from '../models/Day';
import Talk from '../models/Talk';
import _ from 'lodash';
import ApiHandler from '../helpers/apiHandler';

interface IState {
    days: Array<any>,
    talks: Array<Talk>,
    draggingTalk: Talk | null,
    mouseX: number,
    mouseY: number,
    timeslotCallback: (talk: Talk) => void | null, // Used for adding talk to timeslot
    isLoading: boolean
}

class Login extends React.Component<any, IState> {
    private mouseMoveCallback: any;
    private mouseUpCallback: any;

    constructor(props) {
        super(props);

        this.state = {
            days: [],
            talks: [],
            draggingTalk: null,
            mouseX: 0,
            mouseY: 0,
            timeslotCallback: null,
            isLoading: true
        }

        this.mouseMoveCallback = (evt) => this.handleDrag(evt.pageX, evt.pageY);
        this.mouseUpCallback = () => this.stopDrag();
    }

    async componentDidMount() {
        const res = await Promise.all([
            ApiHandler.getSchedule(), ApiHandler.getTalks()
        ]);

        const program = res[0];

        const assignedTalks = program.days
            .map(day => day.timeslots
                .map(timeslot => timeslot.rooms
                    .map(room => room.talks))).flat(Infinity);

        const unassignedTalks = res[1].talks.filter(talk => !assignedTalks.find(t => t.id == talk.id));

        this.setState({
            days: program.days,
            talks: unassignedTalks,
            isLoading: false
        });

        document.addEventListener('mousemove', this.mouseMoveCallback);
        document.addEventListener('mouseup', this.mouseUpCallback);
    }

    componentWillUnmount() {
        document.removeEventListener('mousemove', this.mouseMoveCallback);
        document.removeEventListener('mousemove', this.mouseUpCallback);
    }

    addDay() {
        this.setState((prev) => ({
            days: prev.days.concat([new Day()])
        }));
    }

    startDrag(talk: Talk, x: number, y: number) {
        this.setState((prev) => {
            const index = prev.talks.indexOf(talk);
            let talks = index >= 0 ? prev.talks.slice(0, index).concat(prev.talks.slice(index + 1)) : prev.talks;
            if (prev.draggingTalk != null) {
                talks.push(prev.draggingTalk);
            }
            return {
                talks: talks,
                draggingTalk: talk,
                mouseX: x,
                mouseY: y
            }
        });
    }

    handleDrag(x: number, y: number) {
        if (!this.state.draggingTalk) {
            return;
        }

        this.setState({
            mouseX: x,
            mouseY: y
        })
    }

    stopDrag() {
        if (!this.state.draggingTalk) {
            return;
        }

        if (this.state.timeslotCallback) {
            this.state.timeslotCallback(this.state.draggingTalk);

            this.setState((prev) => ({
                draggingTalk: null
            }));
        }
        else {
            this.setState((prev) => ({
                talks: prev.talks.concat([prev.draggingTalk]),
                draggingTalk: null
            }));
        }

    }

    timeslotCallbackSetter(cb: (talk: Talk) => void) {
        this.setState({
            timeslotCallback: cb
        });
    }

    updateDays(index: number, day: Day) {
        this.setState((prev) => {
            prev.days[index] = day;
            return {
                days: prev.days
            }
        });
    }

    async save() {
        let program = {
            days: []
        };

        // Object with types not equal to Object cannot be uploaded to firestore, need to 'cast' all of them to normal Javascript Objects.
        program.days = this.state.days.map(day => _.cloneDeep(Object.assign({}, day)));
        program.days.map(day => {
            day.timeslots = day.timeslots.map(timeslot => {
                timeslot.rooms = timeslot.rooms.map(room => {
                    room.talks = room.talks.map(talk => talk.id);
                    return Object.assign({}, room);
                });

                timeslot.to = Object.assign({}, timeslot.to);
                timeslot.from = Object.assign({}, timeslot.from);
                return Object.assign({}, timeslot);
            });
            return Object.assign({}, day);
        });

        await ApiHandler.updateSchedule(program);
        //const res = await FirestoreHandler.updateOrCreate('program', 'test', program);
    }

    // Used for day, timeslot and room to add talks back when being removed
    addTalks(talks: Talk[]) {
        this.setState((prev) => ({
            talks: prev.talks.concat(talks)
        }));
    }

    onDayRemoved(dayIndex: number) {
        const removed = this.state.days.splice(dayIndex, 1)[0];
        const talks = removed.timeslots.map(timeslot => timeslot.rooms.map(room => room.talks)).flat(Infinity);
        this.addTalks(talks);
    }

    render() {
        return (<div className="programBuilder">
            <Layout>
                <Loader loading={this.state.isLoading}>

                    <div className="program-builder">
                        <div className="talks">
                            <h4>Unassigned talks</h4>
                            {this.state.talks.map((talk, i) => <TalkView key={i} talk={talk} onStartDrag={this.startDrag.bind(this)}></TalkView>)}
                        </div>

                        <div className="builder">
                            {this.state.days.map((day, i) => <DayView
                                key={i}
                                onRemove={this.onDayRemoved.bind(this, i)}
                                addTalks={this.addTalks.bind(this)}
                                onChange={this.updateDays.bind(this, i)}
                                timeslotCallbackSetter={this.timeslotCallbackSetter.bind(this)}
                                onStartDrag={this.startDrag.bind(this)}
                                day={day}></DayView>)}
                            <button className="add-button" onClick={() => this.addDay()}>Add day</button>
                            <button onClick={() => this.save()}>Save</button>
                        </div>

                        {this.state.draggingTalk != null &&
                            <div className="talk dragging-talk" style={{ left: this.state.mouseX + "px", top: this.state.mouseY + "px" }}>
                                <p>{this.state.draggingTalk.name} - {this.state.draggingTalk.type}</p>
                            </div>
                        }

                    </div>
                </Loader>
            </Layout>
        </div>);
    }
}


export default Login;
