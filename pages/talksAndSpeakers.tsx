import Layout from "./components/Layout";
import Talk from "./components/Talk";
import "../styling/talksAndSpeakersStyles.scss";
import Loader from "./components/Loader";
import React from "react";
import { program as Program } from "../models/data.json";
import { Time, createDate, getDuration } from "../helpers/time";
import RegisterButton from "./components/RegisterButton";
import Filter from './components/Filter';
import ProgramUtils from '../helpers/programUtils';
import ApiHandler from '../helpers/apiHandler';
import FirestoreHandler from '../helpers/firestoreHandler';
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
      tags: []
    }
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.handleFavoriteChange = this.handleFavoriteChange.bind(this);
  }

  async componentDidMount() {
    const program = await ApiHandler.getSchedule();

    let selectedTags = Router.query.tags || [];
    if (selectedTags && !Array.isArray(selectedTags)) {
      selectedTags = [Router.query.tags as string];
    }

    this.setState({
      program: program,
      tags: selectedTags,
      loading: false
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
      if (this.state.tags.length > 0 && !talk.tags.some(tag => this.state.tags.includes(tag))) {
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
                        const to = from.copy().add(getDuration(talk.type));
                        
                        const talkEl = (<div className="talk-container" key={i}>
                          <Talk
                            day={day.day}
                            timeStart={createDate(from, day.day)}
                            timeEnd={createDate(to, day.day)}
                            description={talk.description}
                            speakerInfo={"hei"}
                            speaker={"hei"}
                            title={talk.title}
                            type={talk.type}
                            id={talk.id}
                            room={room.name}
                            language={talk.language}
                            key={i}
                            difficulty={talk.difficulty}
                            tags={talk.tags}
                            selectedTags={this.state.tags}
                            onToggleTag={(val) => this.handleToggleTag(val)}
                            onFavoriteChange={() => this.filterProgram()} />
                        </div>);

                        from = to;
                        return !talk.hide ? talkEl : '';
                      })
                  })))}
          </div>
        </div>
      </Layout>
    </div >
    )
  }
}

export default TalksAndSpeakers;


