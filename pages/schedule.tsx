import { Component } from "react";
import Layout from "./components/Layout";
import "../styling/scheduleStyles.scss";
import Day from "./components/Day";
import FilterButton from "./components/FilterButton";
import ShowOnlyFavoritesButton from "./components/ShowOnlyFavoritesButton";
import FilteredProgramBase from "./components/FilteredProgramBase";

class Schedule extends FilteredProgramBase {
  render() {
    return (
      <div className="schedule">
        <Layout>
          <h1>Schedule</h1>
          <div className="schedule-container">
            <div>
              <ShowOnlyFavoritesButton handleChange={this.handleFavoriteChange}></ShowOnlyFavoritesButton>
              <FilterButton program={this.state.filteredProgram} handleChange={this.handleFilterChange.bind(this)} />
            </div>
            {this.state.filteredProgram.days.map((day, i) =>
              <Day key={i} currDay={day.day} slots={day.slots} />
            )}
          </div>
        </Layout>
      </div>
    );
  }
}

export default Schedule
