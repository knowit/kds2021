import Layout from "./components/Layout";
import Talk from "./components/Talk";
import "../styling/talksAndSpeakersStyles.scss";
import React from "react";
import {program as Program} from "../models/data.json";
import {Time, getDuration} from "../helpers/time";
import Filter from './components/Filter';

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
        this.setState({tags: newVal}, this.filterProgram);
    }

    handleFavoriteChange(newVal) {
        this.setState({showOnlyFavorites: newVal}, this.filterProgram);
    }

    handleToggleTag(tag) {
        this.setState((prev) => {
            if (prev.tags.indexOf(tag) > -1) {
                return {tags: prev.tags.filter(t => t != tag)};
            }
            return {tags: prev.tags.concat(tag)};

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
                                const tags = talk.tags.concat([talk.language])

                                if (this.state.showOnlyFavorites && !localStorage.getItem(talk.talkId)) {
                                    talk.hide = true;
                                } else if (this.state.tags.length > 0 && !tags.some(tag => this.state.tags.indexOf(tag) > -1)) {
                                    talk.hide = true;
                                } else {
                                    talk.hide = false;
                                }
                            })
                    })));

        this.setState({filteredProgram: filteredProgram});
    }

    render() {
        return (<div className="talksAndSpeakers page">

                <Layout title="Talks & Speakers" filter={'small'} onTagChange={this.handleFilterChange}
                        onFavoriteChange={this.handleFavoriteChange} selectedTags={this.state.tags}
                        showOnlyFavorites={this.state.showOnlyFavorites} background={true}>
                    <div className="talks-container document">

                        <div className="title-filter">
                            <Filter onFavoriteChange={this.handleFavoriteChange} onTagChange={this.handleFilterChange}
                                    selectedTags={this.state.tags} showOnlyFavorites={this.state.showOnlyFavorites}
                                    className="hide-small talks-filter" type="dropdown"/>
                            <h1 className="title"> Talks & speakers</h1>
                        </div>

                        <div className="talks">
                            {this.state.filteredProgram.days
                                .map(day => day.slots
                                    .filter(function (slot) {
                                        return slot.rooms !== undefined
                                    })
                                    .map(slot => slot.rooms
                                        .map(room => {

                                            let from = Time.fromNumber(slot.timeStart);
                                            return room.talks
                                                .map((talk, i) => {
                                                    const to = from.copy().add(getDuration(talk));
                                                    const talkEl = (<div className="talk-container" key={i}>
                                                        <Talk
                                                            visibility={talk.hide}
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
                                                            selectedTags={this.state.tags}
                                                            onToggleTag={(val) => this.handleToggleTag(val)}
                                                            onFavoriteChange={() => this.filterProgram()}/>
                                                    </div>);

                                                    from = to;

                                                    return !talk.hide ? talkEl : '';
                                                })
                                        })))}

                        </div>
                    </div>
                </Layout>
            </div>
        )
    }
}

export default TalksAndSpeakers;


