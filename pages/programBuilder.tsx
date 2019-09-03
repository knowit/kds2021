import '../styling/programBuilder.scss';
import { auth, firebase } from '../firebase';
import FirestoreHandler from '../helpers/firestoreHandler'
import React from 'react';
import Layout from './components/Layout';
import DayView from './components/ProgramBuilderDay';
import TalkView from './components/ProgramBuilderTalk';
import Day from '../models/Day';
import Talk from '../models/Talk';


interface IState {
    days: Array<any>,
    talks: Array<Talk>,
    draggingTalk: Talk | null,
    mouseX: number,
    mouseY: number,
    timeslotCallback: (talk: Talk) => void | null // Used for adding talk to timeslot
}

class Login extends React.Component<any, IState> {
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
    }

    async componentDidMount() {
        const talks = await FirestoreHandler.getAll("talks");

        
        // Update speaker to its data instead of ref, can drop this if data is stored instead of ref, this will duplicate data and will make updating speakers harder..
        for (let i = 0; i < talks.length; i++) {
            talks[i].speaker = await FirestoreHandler.get('speakers', talks[i].speaker.id);
        }
        
        this.setState({
            talks: talks
        });

        document.addEventListener('mousemove', (evt) => this.handleDrag(evt.clientX, evt.clientY));
        document.addEventListener('mouseup', () => this.stopDrag());
    }

    componentWillUnmount() {
        document.removeEventListener('mousemove', (evt) => this.handleDrag(evt.clientX, evt.clientY));
        document.removeEventListener('mousemove', () => this.stopDrag());
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

    render() {
        return (<div className="programBuilder">
            <Layout>
                <div className="content">
                    { this.state.days.map((day, i) => <DayView onChange={this.updateDays.bind(this, i)} timeslotCallbackSetter={this.timeslotCallbackSetter.bind(this)} onStartDrag={this.startDrag.bind(this)} day={day}></DayView>)}
                    <button className="add-button" onClick={() => this.addDay()}>Add day</button>
                </div>
                { this.state.talks.map(talk => <TalkView talk={talk} onStartDrag={this.startDrag.bind(this)}></TalkView>)}

                { this.state.draggingTalk != null &&
                    <div className="dragging-talk" style={{left: this.state.mouseX + "px", top: this.state.mouseY + "px"}}>
                        {this.state.draggingTalk.name}
                    </div>
                }
            </Layout>
        </div>);
    }
}

export default Login;
