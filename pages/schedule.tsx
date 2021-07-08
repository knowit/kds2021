import React, { useState, useEffect } from "react";
import { Day, Filter, Layout } from "../components";

import { program as Program } from "../models/data.json";

import "../styling/scheduleStyles.scss";

const Schedule = () => {
  const [filteredProgram, setFilteredProgram] = useState(
    JSON.parse(JSON.stringify(Program))
  );
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);
  const [currentDayIndex, setCurrentDayIndex] = useState(0);

  useEffect(() => {
    filterProgram();
  }, [selectedTags, showOnlyFavorites]);

  const handleFilterChange = (newVal) => {
    setSelectedTags(newVal);
  };

  const handleFavoriteChange = (newVal) => {
    setShowOnlyFavorites(newVal);
  };

  const handleToggleTag = (tag) => {
    if (selectedTags.indexOf(tag) > -1) {
      setSelectedTags(selectedTags.filter((t) => t != tag));
    } else {
      setSelectedTags(selectedTags.concat(tag));
    }
  };

  const filterProgram = () => {
    let filteredProgram = JSON.parse(JSON.stringify(Program));

    filteredProgram.days.forEach((day) => {
      day.slots.forEach((slot) => {
        slot.rooms = slot.rooms.filter((room) => {
          room.talks = room.talks.filter((talk) => {
            const talkTags = talk.tags.concat([talk.language]);
            const talkFavorited = localStorage.getItem(talk.talkId) != null;

            if (showOnlyFavorites && !talkFavorited) {
              return false;
            }

            if (selectedTags.length == 0) {
              return true;
            }

            return selectedTags.some((tag) => {
              return talkTags.some((talkTag) => talkTag == tag);
            });
          });

          return room.talks.length > 0;
        });
      });
    });
    setFilteredProgram(filteredProgram);
  };

  const setDay = (index) => {
    setCurrentDayIndex(index);
  };

  return (
    <div className="schedule page">
      <Layout
        title="Schedule"
        hideLogo={"small"}
        background={true}
      >
        <div className="schedule-document negative-margin">
          <div className="day-selector-top">
            {filteredProgram.days.map((day, i) => (
              <span key={day.day}>
                {i != 0 && <span> | </span>}
                <span
                  onClick={() => setDay(i)}
                  className={`header-day ${
                    currentDayIndex == i ? "selected" : ""
                  }`}
                >
                  {day.day}
                </span>
              </span>
            ))}
          </div>
          <div className="schedule-container">
            <div className="header">
              <Filter
                onTagChange={handleFilterChange}
                onFavoriteChange={handleFavoriteChange}
                selectedTags={selectedTags}
                showOnlyFavorites={showOnlyFavorites}
                className="hide-small schedule-filter"
                type="dropdown"
              />

              <div className="header-title">
                <h1 className="title">Schedule</h1>
                <div className="day-selector-header">
                  {filteredProgram.days.map((day, i) => (
                    <span key={day.day}>
                      {i != 0 && <span className="seperator"> | </span>}
                      <span
                        onClick={() => setDay(i)}
                        className={`header-day ${
                          currentDayIndex == i ? "selected" : ""
                        }`}
                      >
                        {day.day}
                      </span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {filteredProgram.days.length > 0 && (
              <Day
                onToggleTag={(tag) => handleToggleTag(tag)}
                onFavoriteChange={() => filterProgram() }
                tags={selectedTags}
                currDay={filteredProgram.days[currentDayIndex]}
                slots={
                  filteredProgram.days[currentDayIndex] &&
                  filteredProgram.days[currentDayIndex].slots
                }
              />
            )}
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Schedule;
