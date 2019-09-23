import Layout from "./components/Layout";
import Talk from "./components/Talk";
import "../styling/talksAndSpeakersStyles.scss";
import React from "react";
import ShowOnlyFavoritesButton from "./components/ShowOnlyFavoritesButton";
import { program as Program } from "../models/data.json";
import { Time, getDuration } from "../helpers/time";
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
                .map(slot => {
                  let from = Time.fromString(slot.timeStart);
                  return slot.rooms
                    .map(room => room.talks
                      .map((talk, i) => talk.speakers
                        .map(speaker => {
                          const to = from.copy().add(getDuration(talk.type));
                          const el = (<div className="talk-container" key={i}>
                            <Talk
                              day={day.day}
                              timeStart={from.copy()}
                              timeEnd={to.copy()}
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
                              tags={talk.tags}
                              selectedTags={this.state.tags}
                              onToggleTag={(val) => this.handleToggleTag(val)} />
                          </div>);

                          from = to;

                          return !talk.hide ? el : '';
                        })
                      )
                    )
                })
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


