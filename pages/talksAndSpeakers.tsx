import Layout from "./components/Layout";
import Talk from "./components/Talk";
import "../styling/talksAndSpeakersStyles.scss";
import React from "react";
import { program as Program } from "../models/data.json";

class TalksAndSpeakers extends React.Component {
  render() {
    return (<div className="talksAndSpeakers">
      <Layout>
        <h1> Talks and speakers</h1>

        {Program.days
          .map(day => day.slots
            .filter(function (slot) {
              return slot.rooms !== undefined
            })
            .map(slot => slot.rooms
              .map(room => room.talks
                .map((talk, i) => talk.speakers
                  .map(speaker =>
                    <div className="talk-container">
                      <Talk
                        description={talk.description}
                        speakerInfo={speaker.info}
                        speaker={speaker.name}
                        title={talk.title}
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

      </Layout>
    </div >
    )
  }
}

export default TalksAndSpeakers;


