import "../styling/scheduleStyles.scss";
import Layout from "./components/Layout";
import Day from "./components/Day";
import { Component } from "react";
import { program as Program } from "../models/data.json";
import RegisterButton from "./components/RegisterButton";
import Filter from './components/Filter';

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
      if (prev.tags.indexOf(tag) > -1) {
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
                const tags = talk.tags.concat([talk.language])

                if (this.state.showOnlyFavorites && !localStorage.getItem(talk.talkId)) {
                  talk.hide = true;
                }
                else if (this.state.tags.length > 0 && !tags.some(tag => this.state.tags.indexOf(tag) > -1)) {
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
        <Layout filter={'small'} onTagChange={this.handleFilterChange} onFavoriteChange={this.handleFavoriteChange} showOnlyFavorites={this.state.showOnlyFavorites} selectedTags={this.state.tags} hideLogo={'small'} background={true} header={<RegisterButton></RegisterButton>}>
          <div className="schedule-document negative-margin">
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
                <Filter onTagChange={this.handleFilterChange} onFavoriteChange={this.handleFavoriteChange} selectedTags={this.state.tags} showOnlyFavorites={this.state.showOnlyFavorites} className="hide-small schedule-filter" type="dropdown"></Filter>

                <div className="header-title">
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
              </div>

              {this.state.filteredProgram.days.length > 0 && <Day onToggleTag={(val) => this.handleToggleTag(val)} tags={this.state.tags} rooms={this.state.rooms} currDay={this.state.filteredProgram.days[this.state.currentDayIndex]} slots={this.state.filteredProgram.days[this.state.currentDayIndex].slots} />}
            </div>
          </div>
        </Layout>
      </div>
    );
  }
}

export default Schedule
