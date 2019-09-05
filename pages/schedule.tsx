import { Component } from "react";
import Layout from "./components/Layout";
import "../styling/scheduleStyles.scss";
import Day from "./components/Day";
import FilterButton from "./components/FilterButton";
import ShowOnlyFavoritesButton from "./components/ShowOnlyFavoritesButton";
import FilteredProgramBase from "./components/FilteredProgramBase";
import FirestoreHandler from '../helpers/firestoreHandler';
import React from 'react';
import _ from 'lodash';
import ProgramUtils from '../helpers/programUtils';

class Schedule extends React.Component<any, any> {
  private loaded: boolean = false;
  constructor(props) {
    super(props);

    this.state = {
      program: {
        days: []
      }
    }
  }

  async componentDidMount() {

    if (!this.loaded) {
      this.loaded = true;

      const program = await ProgramUtils.loadProgram('test');

      this.setState({
        program: program
      });

    }
  }

  render() {
    return (
      <div className="schedule">
        <Layout>
          <h1>Schedule</h1>
          <div className="schedule-container">
            <div>
              {/*<ShowOnlyFavoritesButton handleChange={this.handleFavoriteChange}></ShowOnlyFavoritesButton>
              <FilterButton tags={[]} handleChange={this.handleFilterChange.bind(this)} />*/}
            </div>
            {this.state.program.days.map((day, i) =>
              <Day key={i} currDay={day} />
            )}
          </div>
        </Layout>
      </div>
    );
  }
}

export default Schedule
