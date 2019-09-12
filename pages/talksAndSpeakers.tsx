import Layout from "./components/Layout";
import Talk from "./components/Talk";
import FilteredProgramBase from "./components/FilteredProgramBase";
import FilterButton from "./components/FilterButton";
import "../styling/talksAndSpeakersStyles.scss";
import React from "react";
import ShowOnlyFavoritesButton from "./components/ShowOnlyFavoritesButton";

class TalksAndSpeakers extends FilteredProgramBase {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div className="talksAndSpeakers page">
      <Layout filter={true} onFilterChange={this.handleFilterChange}>
        <h1> Talks & speakers</h1>
        <div className="schedule-container">
          <div className="schedule-filter">
            <ShowOnlyFavoritesButton handleChange={this.handleFavoriteChange}></ShowOnlyFavoritesButton>
          </div>
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


