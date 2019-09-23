import "../styling/scheduleStyles.scss";
import Layout from "./components/Layout";
import Day from "./components/Day";
import { Component } from "react";
import { program as Program } from "../models/data.json";


class Schedule extends Component<any, any> {
  constructor(props) {
    super(props);
    const filteredProgram = JSON.parse(JSON.stringify(Program)); // Need a deep copy
    this.state = {
      filteredProgram: filteredProgram,
      showOnlyFavorites: false,
      tags: [],
      currentDayIndex: 0,
      rooms: this.getRooms(filteredProgram.days[0])
    };
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.handleFavoriteChange = this.handleFavoriteChange.bind(this);
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
      if (prev.tags.includes(tag)) {
        return { tags: prev.tags.filter(t => t != tag) };
      }
      return { tags: prev.tags.concat(tag) };
      
    }, this.filterProgram);
  }

  filterProgram() {
    let filteredProgram = JSON.parse(JSON.stringify(Program));
    filteredProgram.days
      .forEach(day => day.slots
        .forEach(slot => slot.rooms && slot.rooms
          .forEach(room => {
            room.talks
              .forEach(talk => {
                if (this.state.showOnlyFavorites && !localStorage.getItem(talk.talkId)) {
                  talk.hide = true;
                }
                else if (this.state.tags.length > 0 && !talk.tags.some(tag => this.state.tags.includes(tag))) {
                  talk.hide = true;
                }
                else {
                  talk.hide = false;
                }
              })
          }))
      );

    this.setState({ filteredProgram: filteredProgram });
  }

  setDay(index) {
    this.setState({
      currentDayIndex: index
    });
  }

  render() {
    return (
      <div className="schedule page">
        <Layout filter={true} onFilterChange={this.handleFilterChange} selectedTags={this.state.tags} hideLogo={true} background={true}>
          <div className="day-selector-top">
            {this.state.filteredProgram.days.map((day, i) =>
              <span key={day.day}>
                {i != 0 && <span> | </span>}
                <span onClick={() => this.setDay(i)} className={`header-day ${this.state.currentDayIndex == i ? 'selected' : ''}`}>
                  {day.day}
                </span>
              </span>)}
          </div>
          <div className="schedule-container">
            <div className="header">
              <h1>Schedule</h1>
              <div className="day-selector-header">
                {this.state.filteredProgram.days.map((day, i) =>
                  <span key={day.day}>
                    {i != 0 && <span className="seperator"> | </span>}
                    <span onClick={() => this.setDay(i)} className={`header-day ${this.state.currentDayIndex == i ? 'selected' : ''}`}>
                      {day.day}
                    </span>
                  </span>)}
              </div>
            </div>

            {this.state.filteredProgram.days.length > 0 && <Day onToggleTag={(val) => this.handleToggleTag(val)} tags={this.state.tags} rooms={this.state.rooms} currDay={this.state.filteredProgram.days[this.state.currentDayIndex]} slots={this.state.filteredProgram.days[this.state.currentDayIndex].slots} />}
          </div>
        </Layout>
      </div>
    );
  }
}

export default Schedule
