import Layout from "./components/Layout";
import Talk from "./components/Talk";
import "../styling/talksAndSpeakersStyles.scss";
import React from "react";
import ShowOnlyFavoritesButton from "./components/ShowOnlyFavoritesButton";
import { program as Program } from "../models/data.json";

class TalksAndSpeakers extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      filteredProgram: JSON.parse(JSON.stringify(Program)), // Need a deep copy
      showOnlyFavorites: false,
      tags: []
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

  render() {
    return (<div className="talksAndSpeakers page">
      <Layout filter={true} onFilterChange={this.handleFilterChange}>
        <div className="talks-container document">
          <h1> Talks & speakers</h1>
          <div className="talks">
            {this.state.filteredProgram.days
              .map(day => day.slots
                .filter(function (slot) {
                  return slot.rooms !== undefined
                })
                .map(slot => slot.rooms
                  .map(room => room.talks
                    .map((talk, i) => talk.speakers
                      .map(speaker =>
                        <div className="talk-container" key={i}>
                          <Talk
                            day={day.day}
                            timeStart={slot.timeStart}
                            timeEnd={slot.timeEnd}
                            description={talk.description}
                            speakerInfo={speaker.info}
                            speaker={speaker.name}
                            title={talk.title}
                            type={talk.type}
                            id={talk.talkId}
                            room={room.name}
                            language={talk.language}
                            key={i}
                            difficulty={talk.difficulty}
                            tags={talk.tags} />
                        </div>
                      )
                    )
                  )
                )
              )
            }
          </div>
        </div>
      </Layout>
    </div >
    )
  }
}

export default TalksAndSpeakers;


