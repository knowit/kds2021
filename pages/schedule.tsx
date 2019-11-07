import "../styling/scheduleStyles.scss";
import "../styling/programBuilderStyles.scss";
import Layout from "./components/Layout";
import DayView from "./components/Day";
import Day from '../models/Day';
import Timeslot from '../models/Timeslot';
import Talk from "./components/Talk";
import { Component, createRef } from "react";
import { program as Program } from "../models/data.json";
import RegisterButton from "./components/RegisterButton";
import Filter from './components/Filter';
import ProgramUtils from '../helpers/programUtils';
import Router from 'next/router';
import ApiHandler from '../helpers/apiHandler';
import { dayOfWeek } from "../helpers/dateUtils";
import DaySelect from './components/DaySelect';
import _ from 'lodash';
import { auth } from "../firebase_utils";
import Loader from "./components/Loader";

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
      edit: false,
      talks: [],
      isAdmin: false,
      draggingTalk: null,
      mouseX: 0,
      mouseY: 0,
      loading: true,
      showOnlyFavorites: false,
      currentDayIndex: 0
    };
  }

  async componentDidMount() {
    const [program, talks] = await Promise.all([
      ApiHandler.getSchedule(), ApiHandler.getTalks()
    ]);

    const assignedTalks = [];
    program.days
      .forEach(day => day.timeslots
        .forEach(timeslot => timeslot.rooms
          .forEach(room => room.talks
            .forEach(talk => assignedTalks.push(talk)))));

    const unassignedTalks = talks.filter(talk => !assignedTalks.find(t => t.id == talk.id));
    let selectedTags = Router.query.tags || [];
    if (selectedTags && !Array.isArray(selectedTags)) {
      selectedTags = [Router.query.tags as string];
    }
    let showOnlyFavorites = Router.query.onlyFavorites;

    this.setState({
      tags: selectedTags,
      program: program,
      talks: unassignedTalks,
      showOnlyFavorites: showOnlyFavorites,
      loading: false
    }, () => this.filterProgram());

    this.mouseMoveCallback = (evt) => this.handleDrag(evt.pageX, evt.pageY);
    this.mouseUpCallback = () => this.stopDrag();

    document.addEventListener('mousemove', this.mouseMoveCallback);
    document.addEventListener('mouseup', this.mouseUpCallback);

    this.checkPermissions();
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.mouseMoveCallback);
    document.removeEventListener('mousemove', this.mouseUpCallback);
  }


  checkPermissions = async () => {
    if (auth.currentUser) {
      const res = await ApiHandler.isAdmin();
      if (res) {
        this.setState({
          isAdmin: res
        });
      }
    }
  }

  toggleEdit = async () => {
    if (this.state.edit) {
      await this.save();
    }

    this.setState((prev) => ({
      edit: !prev.edit
    }), () => this.filterProgram(this.state.edit));
  }

  startDrag = (talk: Talk, x: number, y: number) => {
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

        this.setState({
          program: program,
          draggingTalk: null
        });

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

  updateDay(index: number, day: Day) {
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

  addDay = () => {
    this.setState((prev) => {
      prev.program.days.push(new Day());
      return prev.program;
    })
  }

  addSlot = () => {
    this.setState((prev) => {
      prev.program.days[prev.currentDayIndex].timeslots.push(new Timeslot());
      return prev.program;
    })
  }

  onDayRemoved(dayIndex: number) {
    const removed = this.state.program.days.splice(dayIndex, 1)[0];
    const talks = removed.timeslots.map(timeslot => timeslot.rooms.map(room => room.talks)).flat(Infinity);
    this.addTalks(talks);
    if (dayIndex !== this.state.currentDayIndex) {
      this.setDay(this.state.currentDayIndex - 1);
    }
    else {
      this.setDay(0);
    }
  }

  updateIndices(day, slot, room, talk) {
    this.dayIndex = day;
    this.slotIndex = slot;
    this.roomIndex = room;
    this.talkIndex = talk;
  }

  handleFilterChange = (newVal) => {
    this.setState({ tags: newVal }, this.filterProgram);
  }

  handleFavoriteChange = (newVal) => {
    this.setState({ showOnlyFavorites: newVal }, this.filterProgram);
  }

  updateQuery = () => {
    const tags = this.state.tags.join(',');
    const showOnlyFavorites = this.state.showOnlyFavorites;

    const href = `/?onlyFavorites=${showOnlyFavorites}&tags=${tags}`
    const as = href;
    Router.replace(href, as, { shallow: true });
  }

  handleToggleTag = (tag) => {
    this.setState((prev) => {
      if (prev.tags.indexOf(tag) > -1) {
        return { tags: prev.tags.filter(t => t != tag) };
      }
      return { tags: prev.tags.concat(tag) };

    }, this.filterProgram);
  }

  filterProgram(showAll: boolean = false) {
    ProgramUtils.filterProgram(this.state.program, (talk) => {
      if (showAll) {
        return true;
      }
      if (this.state.showOnlyFavorites && !localStorage.getItem(talk.id)) {
        return false;
      }
      if (this.state.tags.length > 0 && !talk.tags.some(tag => this.state.tags.includes(tag)) && !this.state.tags.includes(talk.language)) {
        return false;
      }
      return true;
    });

    this.setState({
      program: this.state.program
    })
  }

  async save() {
    this.setState({
      loading: true
    });
    const program = {
      days: this.state.program.days.map(day => {
        const newday = Object.assign({}, day);
        newday.timeslots = day.timeslots.map(timeslot => {
          const newtimeslot = Object.assign({}, timeslot);
          newtimeslot.rooms = timeslot.rooms.map(room => {
            const newroom = Object.assign({}, room);
            newroom.talks = room.talks.map(talk => talk.id);
            return newroom;
          });
          return newtimeslot;
        });
        return newday;
      })
    }

    await ApiHandler.updateSchedule(program);
    this.setState({
      loading: false
    });
  }

  render() {
    return (
      <div className="schedule page" ref={this.pageRef} onScroll={() => this.handleDrag(this.state.mouseX, this.state.mouseY)}>
        <Layout title="Schedule" showOnlyFavorites={this.state.showOnlyFavorites} selectedTags={this.state.tags} hideLogo={'small'} filter={this.state.edit ? false : 'small'} background={true} header={<RegisterButton></RegisterButton>}>
          <Loader loading={this.state.loading}>
            <div className="schedule-document negative-margin">
              <div className="day-selector-top">
                {this.state.program.days.map((day, i) =>
                  <span key={day.day}>
                    {i != 0 && <span> | </span>}
                    <span onClick={() => this.setDay(i)} className={`header-day ${this.state.currentDayIndex == i ? 'selected' : ''}`}>
                      {dayOfWeek(day.day)}
                    </span>
                  </span>)}
              </div>
              <div className="program-builder-container">
                {this.state.edit && <div className="unassigned-talks">
                  {this.state.talks.map(talk =>
                    <Talk title={talk.name}
                      edit={this.state.edit}
                      speaker={talk.speaker && talk.speaker.name}
                      type={talk.type}
                      language={talk.language}
                      difficulty={talk.difficulty}
                      id={talk.id}
                      key={talk.id}
                      day={this.props.day}
                      tags={talk.tags}
                      talk={talk}
                      onStartDrag={this.startDrag} />
                  )}
                </div>}
                <div className="schedule-container">
                  <div className="header">
                    {!this.state.edit && <Filter onTagChange={this.handleFilterChange} onFavoriteChange={this.handleFavoriteChange} selectedTags={this.state.tags} showOnlyFavorites={this.state.showOnlyFavorites} className="hide-small schedule-filter" type="dropdown"></Filter>}
                    {this.state.isAdmin && <div className="edit-button">
                      <span onClick={this.toggleEdit}>edit</span>
                    </div>}
                    <div className="header-title">
                      <h1 className="title">Schedule</h1>
                      <div className="day-selector-header">
                        {this.state.program.days.map((day, i) =>
                          <DaySelect edit={this.state.edit} key={i} day={day} seperator={i !== 0} onDayRemoved={() => this.onDayRemoved(i)} onDayUpdate={(day) => this.updateDay(i, day)} onSelect={() => this.setDay(i)} active={i === this.state.currentDayIndex} />
                        )}

                        {this.state.edit && <span className="add-day-button" onClick={this.addDay}>New day</span>}
                      </div>
                      {this.state.edit && this.state.program.days.length > 0 && <div>
                        <span className="add-slot-button" onClick={this.addSlot}>
                          Add slot
                      </span>
                      </div>}
                    </div>
                  </div>

                  {this.state.program.days.length > 0 &&
                    <DayView
                      edit={this.state.edit}
                      onToggleTag={this.handleToggleTag}
                      updateIndices={(slot, room, talk) => this.updateIndices(this.state.currentDayIndex, slot, room, talk)}
                      onRemove={this.onDayRemoved.bind(this)}
                      addTalks={this.addTalks.bind(this)}
                      onChange={this.updateDay.bind(this, this.state.currentDayIndex)}
                      onFavoriteChange={() => this.filterProgram()}
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
          </Loader>
        </Layout>
      </div>
    );
  }
}

export default Schedule
