import Layout from "./components/Layout";
import Talk from "./components/Talk";
import FilteredProgramBase from "./components/FilteredProgramBase";
import FilterButton from "./components/FilterButton";
import "../styling/talksAndSpeakersStyles.scss";
import React from "react";
import dynamic from "next/dynamic"
import ShowOnlyFavoritesButton from "./components/ShowOnlyFavoritesButton";

const FavouriteTalkButtonNoSSR = dynamic(() => import("./components/FavouriteTalkButton"), {
  ssr: false
});

class TalksAndSpeakers extends FilteredProgramBase {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div className="talksAndSpeakers">
      <Layout>
        <h1> Talks and speakers</h1>
        <div className="schedule-container">
          <div className="schedule-filter">
            <ShowOnlyFavoritesButton handleChange={this.handleFavoriteChange}></ShowOnlyFavoritesButton>
            <FilterButton program={this.state.filteredProgram} handleChange={this.handleFilterChange} />
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
                            <FavouriteTalkButtonNoSSR talkId={talk.talkId} />
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


