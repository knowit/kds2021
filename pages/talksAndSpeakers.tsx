import React, { useState, useEffect } from "react";
import { Filter, Layout, Talk } from "../components";
import { program as Program } from "../models/data.json";
import { Time, getDuration } from "../helpers";

import "../styling/talksAndSpeakersStyles.scss";

const TalksAndSpeakers = () => {
  const [filteredProgram, setFilteredProgram] = useState(
    JSON.parse(JSON.stringify(Program))
  );
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);
  const [tags, setTags] = useState([]);

  const handleFilterChange = (newVal) => {
    setTags(newVal);
  };

  const handleFavoriteChange = (newVal) => {
    setShowOnlyFavorites(newVal);
  };

  // TODO
  const handleToggleTag = (tag) => {
        // setState((prev) => {
        //     if (prev.tags.includes(tag)) {
        //         return {tags: prev.tags.filter(t => t != tag)};
        //     }
        //     return {tags: prev.tags.concat(tag)};

        // }, filterProgram);
  };

  useEffect(() => {
    filterProgram();
  }, [tags, showOnlyFavorites]);

  /**
   * Sets the hide-property of talks to a fitting boolean 
   * 
   * @param talks list of talk objects
   */
  const handleHideTalks = (talks) => {
    talks.forEach((talk) => {
      const tags = talk.tags.concat([talk.language]);

      if (showOnlyFavorites && !localStorage.getItem(talk.talkId)) {
        talk.hide = true;
        console.log("Hidden 1");
      } else if (tags.length > 0 && !tags.some((tag) => tags.includes(tag))) {
        talk.hide = true;
        console.log("Hidden 2")
      } else {
        talk.hide = false;
        console.log("Visible")
      }
    })
  }

  const filterProgram = () => {
    console.log("Program is filtered");
    let filteredProgram = JSON.parse(JSON.stringify(Program));
    filteredProgram.days.forEach((day) =>
      day.slots.forEach(
        (slot) =>
          slot.rooms &&
          slot.rooms.forEach((room) => {
            handleHideTalks(room.talks);
          })
      )
    );
    setFilteredProgram(filteredProgram);
  };

  return (
    <div className="talksAndSpeakers page">
      <Layout
        title="Talks & Speakers"
        background={true}
      >
        <div className="talks-container document">
          <div className="title-filter">
            <Filter
              onFavoriteChange={handleFavoriteChange}
              onTagChange={handleFilterChange}
              selectedTags={tags}
              showOnlyFavorites={showOnlyFavorites}
              className="hide-small talks-filter"
              type="dropdown"
            />
            <h1 className="title"> Talks & speakers</h1>
          </div>

          <div className="talks">
            {filteredProgram.days.map((day) =>
              day.slots
                .filter(function (slot) {
                  return slot.rooms !== undefined;
                })
                .map((slot) =>
                  slot.rooms.map((room) => {
                    let from = Time.fromNumber(slot.timeStart);

                    return room.talks.map((talk, i) => {
                      const to = from.copy().add(getDuration(talk));
                      const talkEl = (
                        <div className="talk-container" key={i}>
                          <Talk
                            hidden={talk.hide}
                            day={day.day}
                            timeStart={from}
                            timeEnd={to}
                            description={talk.description}
                            speaker={talk.speakers}
                            title={talk.title}
                            type={talk.type}
                            id={talk.talkId}
                            room={room.name}
                            language={talk.language}
                            key={i}
                            difficulty={talk.difficulty}
                            tags={talk.tags}
                            selectedTags={tags}
                            onToggleTag={(val) => handleToggleTag(val)}
                            onFavoriteChange={ () => {} } //() => filterProgram() }
                          />
                        </div>
                      );

                      from = to;

                      return talk.hide ? "" : talkEl;
                    });
                  })
                )
            )}
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default TalksAndSpeakers;
