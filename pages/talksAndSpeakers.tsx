import Layout from "./components/Layout";
import Talk from "./components/Talk";
import "../styling/talksAndSpeakersStyles.scss";
import Loader from "./components/Loader";
import React from "react";
import { Time, getDuration } from "../helpers/time";
import { createDate } from "../helpers/dateUtils";
import RegisterButton from "./components/RegisterButton";
import Filter from './components/Filter';
import ProgramUtils from '../helpers/programUtils';
import ApiHandler from '../helpers/apiHandler';
import Router from 'next/router';

class TalksAndSpeakers extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      program: {
        days: []
      },
      loading: true,
      showOnlyFavorites: false,
      tags: [],
      notFound: false,
      editable: false
    }
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.handleFavoriteChange = this.handleFavoriteChange.bind(this);
  }

  async componentDidMount() {
    // Router.query does not work for prerendered files..
    const id = Router.asPath.split('id=')[1];

    // Same as for schedule, not using Promise.all to improve caching..
    const program = await ApiHandler.getSchedule(id);
    const defaultId = await ApiHandler.getDefaultId();

    if (!program) {
      this.setState({
        notFound: true
      });
      return;
    }

    this.setState({
      program: program,
      loading: false,
      editable: !id || defaultId == id // Past programs should not be editable
    })
  }

  handleFilterChange(newVal) {
    this.setState({ tags: newVal }, this.filterProgram);
  }
  handleFavoriteChange(newVal) {
    this.setState({ showOnlyFavorites: newVal }, this.filterProgram);
  }

  handleToggleTag(tag) {
    this.setState((prev) => {
      if (prev.tags.indexOf(tag) > -1) {
        return { tags: prev.tags.filter(t => t != tag) };
      }
      return { tags: prev.tags.concat(tag) };

    }, this.filterProgram);
  }

  filterProgram() {
    ProgramUtils.filterProgram(this.state.program, (talk) => {
      if (this.state.showOnlyFavorites && !localStorage.getItem(talk.id)) {
        return false;
      }
      if (this.state.tags.length > 0 && !talk.tags.some(tag => this.state.tags.includes(tag)) && !this.state.tags.includes(talk.language)) {
        return false;
      }
      return true;
    });

    this.setState({
      program: this.state.program
    })
  }

  render() {
    return (<div className="talksAndSpeakers page">
      <Layout title="Talks & Speakers" filter={'small'} onTagChange={this.handleFilterChange} onFavoriteChange={this.handleFavoriteChange} selectedTags={this.state.tags} showOnlyFavorites={this.state.showOnlyFavorites} header={<RegisterButton></RegisterButton>} background={true}>
        {this.state.notFound ? <p>Program not found</p> :
          <Loader loading={this.state.loading}>
            <div className="talks-container document">

              <div className="title-filter">
                <Filter onFavoriteChange={this.handleFavoriteChange} onTagChange={this.handleFilterChange} selectedTags={this.state.tags} showOnlyFavorites={this.state.showOnlyFavorites} className="hide-small talks-filter" type="dropdown"></Filter>
                <h1 className="title"> Talks & speakers</h1>
              </div>

              <div className="talks">
                {this.state.program.days
                  .map(day => day.timeslots
                    .filter(function (slot) {
                      return slot.rooms !== undefined
                    })
                    .map(slot => slot.rooms
                      .map(room => {
                        let from = new Time(slot.from.hours, slot.from.minutes);
                        return room.talks
                          .map((talk, i) => {
                            const duration = talk.duration ? new Time(0, talk.duration) : getDuration(talk.type);
                            const to = from.copy().add(duration);

                            const talkEl = (<div className="talk-container" key={i}>
                              <Talk
                                editable={this.state.editable}
                                day={day.day}
                                timeStart={createDate(from, day.day)}
                                timeEnd={createDate(to, day.day)}
                                description={talk.description}
                                speakerInfo={talk.speaker.info}
                                speaker={talk.speaker.name}
                                title={talk.title}
                                type={talk.type}
                                id={talk.id}
                                room={room.name}
                                language={talk.language}
                                key={i}
                                difficulty={talk.difficulty}
                                tags={talk.tags}
                                selectedTags={this.state.tags}
                                talk={talk}
                                onToggleTag={(val) => this.handleToggleTag(val)}
                                onFavoriteChange={() => this.filterProgram()} />
                            </div>);

                            from = to;
                            return !talk.hide ? talkEl : '';
                          })
                      })))}
              </div>
            </div>
          </Loader>
        }
      </Layout >
    </div >
    )
  }
}

export default TalksAndSpeakers;


