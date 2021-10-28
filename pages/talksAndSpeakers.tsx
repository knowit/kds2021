import React, { useState, useEffect } from "react";
import { Filter, Layout, Talk } from "../components";
import { program as Program } from "../models/data.json";
import { Time, getDuration } from "../helpers";

const talksAndSpeakers = () => {
  const [filteredProgram, setFilteredProgram] = useState(
    Program
  );
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);
  const [atLeastOneTalkVisible, setAtLeastOneTalkVisible] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);

  const handleFilterChange = (newVal) => {
    setSelectedTags(newVal);
  };

  const handleFavoriteChange = (newVal) => {
    setShowOnlyFavorites(newVal);
  };

  const handleToggleTag = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t != tag));
    } else {
      setSelectedTags(selectedTags.concat(tag));
    }
  };

  useEffect(() => {
    filterProgram();
  }, [selectedTags, showOnlyFavorites]);

  /**
   * Sets the hide-property of talks to a fitting boolean
   *
   * @param talks list of talk objects
   * @returns true if at least one talk is visible, otherwise false
   */
  const handleHideTalks = (talks) => {
    let visible = false;
    talks.forEach((talk) => {
      const tagsInCurrentTalk = talk.tags.concat([talk.language]);

      if (showOnlyFavorites && !localStorage.getItem(talk.talkId)) {    // hide not-favorited talks
        talk.hide = true;
      } else if                                                         // hide talks which doesn't contain a selected tag
      (
        selectedTags.length > 0 &&
        !selectedTags.some((tag) => tagsInCurrentTalk.includes(tag))
      ) {
        talk.hide = true;
      } else {
        talk.hide = false;
        visible = true;
      }
    })
    return visible;
  }

  const filterProgram = () => {
    let visibleTotal = false;     // changed to true if at least one talk is visible
    let filteredProgram = JSON.parse(JSON.stringify(Program));
    filteredProgram.days.forEach((day) =>
      day.slots.forEach(
        (slot) =>
          slot.rooms &&
          slot.rooms.forEach((room) => {
            let visible = handleHideTalks(room.talks)
            visibleTotal = visibleTotal || visible;
          })
      )
    );
    setAtLeastOneTalkVisible(visibleTotal);
    setFilteredProgram(filteredProgram);
  };

  // conditional rendering
  let talksDOM;
  if (showOnlyFavorites && !atLeastOneTalkVisible) {
    talksDOM = <h1>No favorites selected</h1>;
  } else {
    talksDOM = filteredProgram.days.map((day) =>
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
                  {talk.title != "Break" && 
                  <Talk
                    hidden={(talk as any).hide}
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
                    tags={talk.tags}
                    selectedTags={selectedTags}
                    onToggleTag={(tag) => handleToggleTag(tag)}
                    onFavoriteChange={ () => filterProgram() }
                    isInSchedule={false}
                  />}
                </div>
              );

              from = to;

              return (talk as any).hide ? "" : talkEl;
            });
          })
        )
      )
  }

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
              selectedTags={selectedTags}
              showOnlyFavorites={showOnlyFavorites}
              className="hide-small talks-filter"
              type="dropdown"
            />
            <h1 className="title"> Talks & speakers</h1>
          </div>
          <div className="talks">
            {talksDOM}
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default talksAndSpeakers;
