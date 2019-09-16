import { Component } from "react";
import Layout from "./components/Layout";
import "../styling/scheduleStyles.scss";
import Day from "./components/Day";
import FilterButton from "./components/FilterButton";
import ShowOnlyFavoritesButton from "./components/ShowOnlyFavoritesButton";
import FilteredProgramBase from "./components/FilteredProgramBase";
import { program as Program } from "../models/data.json";


class Schedule extends Component<any, any> {
  constructor(props) {
    super(props);
    const filteredProgram = JSON.parse(JSON.stringify(Program)); // Need a deep copy
    this.state = {
      filteredProgram: filteredProgram,
      showOnlyFavorites: false,
      tags: [],
      currentDayIndex: 0
    }
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.handleFavoriteChange = this.handleFavoriteChange.bind(this);
  }


  handleFilterChange(newVal) {
    this.setState({ tags: newVal }, this.filterProgram);
  }
  handleFavoriteChange(newVal) {
    this.setState({ showOnlyFavorites: newVal }, this.filterProgram);

  }

  filterProgram() {
    let filteredProgram = JSON.parse(JSON.stringify(Program));
    filteredProgram.days
      .forEach(day => day.slots
        .forEach(slot => slot.rooms && slot.rooms
          .forEach(room => {
            room.talks = room.talks
              .filter(talk => {
                if (this.state.showOnlyFavorites && !localStorage.getItem(talk.talkId)) {
                  return false;
                }
                if (this.state.tags.length > 0 && !talk.tags.some(tag => this.state.tags.includes(tag))) {
                  return false;
                }
                return true;
              })
          })));

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
        <Layout filter={true} onFilterChange={this.handleFilterChange} hideLogo={true}>
          <div className="day-selector">
            {this.state.filteredProgram.days.map((day, i) =>
              <span>
                {i != 0 && <span> | </span>}
                <span onClick={() => this.setDay(i)} className={`header-day ${this.state.currentDayIndex == i ? 'selected' : ''}`}>
                  {day.day}
                </span>
              </span>)}
          </div>
          <div className="schedule-container">
              {this.state.filteredProgram.days.length > 0 && <Day currDay={this.state.filteredProgram.days[this.state.currentDayIndex]} slots={this.state.filteredProgram.days[this.state.currentDayIndex].slots} />}
          </div>
        </Layout>
      </div>
    );
  }
}

export default Schedule
