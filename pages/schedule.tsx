import "../styling/scheduleStyles.scss";
import Layout from "./components/Layout";
import Day from "./components/Day";
import { Component } from "react";
import { program as Program } from "../models/data.json";
import RegisterButton from "./components/RegisterButton";
import Filter from './components/Filter';
import ProgramUtils from '../helpers/programUtils';
import Router from 'next/router';
import ApiHandler from '../helpers/apiHandler';
import DateUtils from "../helpers/dateUtils";

class Schedule extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      program: {
        days: []
      },
      loading: true,
      showOnlyFavorites: false,
      tags: [],
      currentDayIndex: 0
    };
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.handleFavoriteChange = this.handleFavoriteChange.bind(this);
  }

  async componentDidMount() {
    const program = await ApiHandler.getSchedule();

    let selectedTags = Router.query.tags || [];
    if (selectedTags && !Array.isArray(selectedTags)) {
      selectedTags = [Router.query.tags as string];
    }

    this.setState({
      program: program,
      tags: selectedTags,
      loading: false
    })
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

  handleFilterChange(newVal) {
    this.setState({ tags: newVal }, this.filterProgram);
  }
  handleFavoriteChange(newVal) {
    this.setState({ showOnlyFavorites: newVal }, this.filterProgram);
  }

  handleToggleTag(tag) {
    this.setState((prev) => {
      if (prev.tags.indexOf(tag) > -1) {
        return { tags: prev.tags.filter(t => t != tag) };
      }
      return { tags: prev.tags.concat(tag) };

    }, this.filterProgram);
  }

  filterProgram() {
    ProgramUtils.filterProgram(this.state.program, (talk) => {
      if (this.state.showOnlyFavorites && !localStorage.getItem(talk._id)) {
        return false;
      }
      if (this.state.tags.length > 0 && !talk.tags.some(tag => this.state.tags.includes(tag))) {
        return false;
      }
      return true;
    });

    this.setState({
      program: this.state.program
    })
  }

  setDay(index) {
    this.setState({
      currentDayIndex: index
    });
  }

  render() {
    return (
      <div className="schedule page">
        <Layout title="Schedule" filter={'small'} onTagChange={this.handleFilterChange} onFavoriteChange={this.handleFavoriteChange} showOnlyFavorites={this.state.showOnlyFavorites} selectedTags={this.state.tags} hideLogo={'small'} background={true} header={<RegisterButton></RegisterButton>}>
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
            <div className="schedule-container">
              <div className="header">
                <Filter onTagChange={this.handleFilterChange} onFavoriteChange={this.handleFavoriteChange} selectedTags={this.state.tags} showOnlyFavorites={this.state.showOnlyFavorites} className="hide-small schedule-filter" type="dropdown"></Filter>

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

              {this.state.program.days.length > 0 && <Day onToggleTag={(val) => this.handleToggleTag(val)}
                tags={this.state.tags}
                currDay={this.state.program.days[this.state.currentDayIndex]}
                slots={this.state.program.days[this.state.currentDayIndex] && this.state.program.days[this.state.currentDayIndex].timeslots} />}
            </div>
          </div>
        </Layout>
      </div>
    );
  }
}

export default Schedule
