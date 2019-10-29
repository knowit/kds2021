import "../styling/scheduleStyles.scss";
import "../styling/programBuilderStyles.scss";
import Layout from "./components/Layout";
import Day from "./components/Day";
import Talk from "./components/Talk";
import { Component, createRef } from "react";
import { program as Program } from "../models/data.json";
import RegisterButton from "./components/RegisterButton";
import Filter from './components/Filter';
import ProgramUtils from '../helpers/programUtils';
import Router from 'next/router';
import ApiHandler from '../helpers/apiHandler';
import DateUtils from "../helpers/dateUtils";

class Schedule extends Component<any, any> {
  private mouseMoveCallback: any;
  private mouseUpCallback: any;
  private pageRef: any = createRef();

  private dayIndex: number = 0;
  private slotIndex: number = 0;
  private roomIndex: number = 0;
  private talkIndex: number = 0;

  constructor(props) {
    super(props);
    this.state = {
      program: {
        days: []
      },
      talks: [],
      draggingTalk: null,
      mouseX: 0,
      mouseY: 0,
      loading: true,
      showOnlyFavorites: false,
      currentDayIndex: 0
    };
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
      program: program,
      talks: unassignedTalks,
      loading: false
    });

    this.mouseMoveCallback = (evt) => this.handleDrag(evt.pageX, evt.pageY);
    this.mouseUpCallback = () => this.stopDrag();

    document.addEventListener('mousemove', this.mouseMoveCallback);
    document.addEventListener('mouseup', this.mouseUpCallback);
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.mouseMoveCallback);
    document.removeEventListener('mousemove', this.mouseUpCallback);
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
    });
  }

  stopDrag() {
    if (!this.state.draggingTalk) {
      return;
    }

    if (![this.dayIndex, this.slotIndex, this.roomIndex, this.talkIndex].includes(-1)) {
      const program = this.state.program;
      const room = program.days[this.dayIndex].timeslots[this.slotIndex].rooms[this.roomIndex];
      if (room) {
        room.talks.splice(this.talkIndex, 0, this.state.draggingTalk);

        this.setState((prev) => ({
          program: program,
          draggingTalk: null
        }));


        return;
      }

    }
    this.setState((prev) => ({
      talks: prev.talks.concat([prev.draggingTalk]),
      draggingTalk: null
    }));

  }

  getRooms(day) {
    const roomDict = {};

    const rooms = day.slots.reduce((acc, slot) => acc.concat(slot.rooms), []);
    rooms.forEach(room => {
      if (room) {
        roomDict[room.name] = true;
      }
    });
    return Object.keys(roomDict);
  }

  setDay(index) {
    this.setState({
      currentDayIndex: index
    });
  }

  updateDays(index: number, day: Day) {
    this.setState((prev) => {
      prev.program.days[index] = day;
      return {
        program: prev.program
      }
    });
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

  updateIndices(day, slot, room, talk) {
    this.dayIndex = day;
    this.slotIndex = slot;
    this.roomIndex = room;
    this.talkIndex = talk;
  }

  render() {
    return (
      <div className="schedule page" ref={this.pageRef} onScroll={() => this.handleDrag(this.state.mouseX, this.state.mouseY)}>
        <Layout title="Schedule" showOnlyFavorites={this.state.showOnlyFavorites} selectedTags={this.state.tags} hideLogo={'small'} background={true} header={<RegisterButton></RegisterButton>}>
          <div className="schedule-document negative-margin">
            <div className="day-selector-top">
              {this.state.program.days.map((day, i) =>
                <span key={day.day}>
                  {i != 0 && <span> | </span>}
                  <span onClick={() => this.setDay(i)} className={`header-day ${this.state.currentDayIndex == i ? 'selected' : ''}`}>
                    {DateUtils.dayOfWeek(day.day)}
                  </span>
                </span>)}
            </div>
            <div className="program-builder-container">
              <div>
                {this.state.talks.map(talk =>
                  <Talk title={talk.name}
                    speaker={talk.speaker && talk.speaker.name}
                    type={talk.type}
                    language={talk.language}
                    difficulty={talk.difficulty}
                    id={talk.id}
                    key={talk.id}
                    day={this.props.day}
                    tags={talk.tags}
                    talk={talk}
                    onStartDrag={this.startDrag.bind(this)} />
                )}
              </div>
              <div className="schedule-container">
                <div className="header">
                  <div className="header-title">
                    <h1 className="title">Schedule</h1>
                    <div className="day-selector-header">
                      {this.state.program.days.map((day, i) =>
                        <span key={day.day.getDay()}>
                          {i != 0 && <span className="seperator"> | </span>}
                          <span onClick={() => this.setDay(i)} className={`header-day ${this.state.currentDayIndex == i ? 'selected' : ''}`}>
                            {DateUtils.dayOfWeek(day.day)}
                          </span>
                        </span>)}
                    </div>
                  </div>
                </div>

                {this.state.program.days.length > 0 &&
                  <Day
                    updateIndices={(slot, room, talk) => this.updateIndices(this.state.currentDayIndex, slot, room, talk)}
                    onRemove={this.onDayRemoved.bind(this)}
                    addTalks={this.addTalks.bind(this)}
                    onChange={this.updateDays.bind(this, this.state.currentDayIndex)}
                    onStartDrag={this.startDrag.bind(this)}
                    draggingTalk={this.state.draggingTalk}
                    tags={this.state.tags}
                    day={this.state.program.days[this.state.currentDayIndex]}
                    slots={this.state.program.days[this.state.currentDayIndex] && this.state.program.days[this.state.currentDayIndex].timeslots} />}
              </div>
            </div>
          </div>
          {this.state.draggingTalk != null &&
            <div className="talk dragging-talk" style={{ left: this.state.mouseX + "px", top: this.state.mouseY + (this.pageRef && this.pageRef.current.scrollTop || 0) + "px", position: "absolute" }}>
              <p>{this.state.draggingTalk.name} - {this.state.draggingTalk.type}</p>
            </div>
          }
        </Layout>
      </div>
    );
  }
}

export default Schedule
