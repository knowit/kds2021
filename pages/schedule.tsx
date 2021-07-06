import React, { useState, useEffect } from "react";
import { Day, Filter, Layout } from "../components";

import { program as Program } from "../models/data.json";

import "../styling/scheduleStyles.scss";

const Schedule = () => {
  const [filteredProgram, setFilteredProgram] = useState(
    JSON.parse(JSON.stringify(Program))
  );
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);
  const [tags, setTags] = useState([]);
  const [currentDayIndex, setCurrentDatIndex] = useState(0);

  const getRooms = (day) => {
    const roomDict = {};

    const rooms = day.slots.reduce((acc, slot) => acc.concat(slot.rooms), []);
    rooms.forEach((room) => {
      if (room) {
        roomDict[room.name] = true;
      }
    });
    return Object.keys(roomDict);
  };

  useEffect(() => {
    filterProgram();
  }, [tags, showOnlyFavorites]);

  const handleFilterChange = (newVal) => {
    setTags(newVal);
  };

  const handleFavoriteChange = (newVal) => {
    setShowOnlyFavorites(newVal);
  };

  const handleToggleTag = (tag) => {
    filterProgram();

    if (tags.indexOf(tag) > -1) {
      setTags(tags.filter((t) => t != tag));
    } else {
      setTags(tags.concat(tag));
    }
  };

  const filterProgram = () => {
    let newProgram = JSON.parse(JSON.stringify(Program));

    newProgram.days.forEach((day) => {
      day.slots.forEach((slot) => {
        slot.rooms = slot.rooms.filter((room) => {
          room.talks = room.talks.filter((talk) => {
            const talkTags = talk.tags.concat();
            const talkFavorited = localStorage.getItem(talk.talkId) != null;

            if (showOnlyFavorites && !talkFavorited) {
              return false;
            }

            if (tags.length == 0) {
              return true;
            }

            return tags.some((tag) => {
              return talkTags.some((talkTag) => talkTag == tag);
            });
          });

          return room.talks.length > 0;
        });
      });
    });

    //alert(JSON.stringify(newProgram.days));

    setFilteredProgram(newProgram);
  };

  const setDay = (index) => {
    setCurrentDatIndex(index);
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
                selectedTags={tags}
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
                onToggleTag={(val) => handleToggleTag(val)}
                tags={tags}
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
