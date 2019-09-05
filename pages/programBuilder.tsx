import '../styling/programBuilder.scss';
import { auth, firebase } from '../firebase';
import FirestoreHandler from '../helpers/firestoreHandler'
import React from 'react';
import Layout from './components/Layout';
import DayView from './components/ProgramBuilderDay';
import TalkView from './components/ProgramBuilderTalk';
import Day from '../models/Day';
import Talk from '../models/Talk';
import _ from 'lodash';
import programUtils from '../helpers/programUtils';

interface IState {
    days: Array<any>,
    talks: Array<Talk>,
    draggingTalk: Talk | null,
    mouseX: number,
    mouseY: number,
    timeslotCallback: (talk: Talk) => void | null // Used for adding talk to timeslot
}

class Login extends React.Component<any, IState> {
    private mouseMoveCallback: any;
    private mouseUpCallback: any;

    constructor(props) {
        super(props);

        this.state = {
            days : [],
            talks: [],
            draggingTalk: null,
            mouseX: 0,
            mouseY: 0,
            timeslotCallback: null
        }

        this.mouseMoveCallback = (evt) => this.handleDrag(evt.pageX, evt.pageY);
        this.mouseUpCallback = () => this.stopDrag();
    }

    async componentDidMount() {
        let talks = await FirestoreHandler.getAll("talks");

        const program = await programUtils.loadProgram('test');

        const programTalks = programUtils.getTalks(program);

        // Avoid duplicate talks
        talks = talks.filter(talk => {
            const res = programTalks.some(pTalk => pTalk.id == talk.id);
            return !res;
        });
        
        // Update speaker to its data instead of ref, can drop this if data is stored instead of ref, this will duplicate data and will make updating speakers harder..
        const speakers = await Promise.all(talks.map(talk => FirestoreHandler.get('speakers', talk.speaker.id)));

        talks.forEach((talk, index) => {
            talk.speaker = speakers[index];
        });
        
        this.setState({
            days: program.days,
            talks: talks
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
        })


        const res = await FirestoreHandler.update('program', 'test', program);
    }

    render() {
        return (<div className="programBuilder">
            <Layout>
                <div className="content">
                    { this.state.days.map((day, i) => <DayView onChange={this.updateDays.bind(this, i)} timeslotCallbackSetter={this.timeslotCallbackSetter.bind(this)} onStartDrag={this.startDrag.bind(this)} day={day}></DayView>)}
                    <button className="add-button" onClick={() => this.addDay()}>Add day</button>
                </div>
                { this.state.talks.map(talk => <TalkView talk={talk} onStartDrag={this.startDrag.bind(this)}></TalkView>)}

                { this.state.draggingTalk != null &&
                    <div className="talk dragging-talk" style={{left: this.state.mouseX + "px", top: this.state.mouseY + "px"}}>
                        <p>{this.state.draggingTalk.name} - {this.state.draggingTalk.type}</p>
                    </div>
                }

                <button onClick={() => this.save()}>Save</button>
            </Layout>
        </div>);
    }
}

export default Login;
