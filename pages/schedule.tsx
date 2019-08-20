import { Component } from "react";
import Layout from "./components/Layout";
import "../styling/styling.scss";
import Day from "./components/Day";
import { program as Program } from "../models/data.json";
import FilterButton from "./components/FilterButton";

class Schedule extends Component {


  render() {
    return (
      <div className="schedule">
        <Layout>
          <h1>Schedule</h1>
          <div className="schedule-content">
            {/* <FilterButton program={Program} /> */}
            <div className="schedule-content">
              {Program.days.map((day, i) =>
                <Day key={i} currDay={day.day} slots={day.slots} />
              )}
            </div>
          </div>
        </Layout>
      </div>
    );
  }
}

export default Schedule
