import Layout from "./components/Layout";
import "../styling/scheduleStyles.scss";
import Day from "./components/Day";
import FilterButton from "./components/FilterButton";
import ShowOnlyFavoritesButton from "./components/ShowOnlyFavoritesButton";
import FirestoreHandler from '../helpers/firestoreHandler';
import React from 'react';
import _ from 'lodash';
import ProgramUtils from '../helpers/programUtils';
import programUtils from "../helpers/programUtils";

class Schedule extends React.Component<any, any> {
    private loaded: boolean = false;
    constructor(props) {
        super(props);

        this.state = {
            program: {
                days: []
            },
            filteredProgram: {
                days: []
            },
            tags: [],
            selectedTags: [],
            showOnlyFavorites: false
        }
    }

    async componentDidMount() {

        if (!this.loaded) {
            this.loaded = true;

            const program = await ProgramUtils.loadProgram('test');

            const tags = (await FirestoreHandler.getAll('tags')).map(tag => tag.name);

            this.setState({
                program: program,
                filteredProgram: program,
                tags: tags
            });

        }
    }

    handleFavoriteChange(val) {
        this.setState({
            showOnlyFavorites: val
        }, this.filter);
    }

    handleFilterChange(val) {
        this.setState({
            selectedTags: val
        }, this.filter);
    }

    filter() {
        const filteredProgram = _.cloneDeep(this.state.program);

        programUtils.filterProgram(filteredProgram, (talk) => {
            if (this.state.showOnlyFavorites && !localStorage.getItem(talk.id)) {
                return false;
            }
            if (this.state.selectedTags.length > 0 && !talk.tags.some(tag => this.state.selectedTags.includes(tag))) {
                return false;
            }
            return true;
        });

        this.setState({
            filteredProgram: filteredProgram
        })

    }

    render() {
        return (
            <div className="schedule">
                <Layout>
                    <h1>Schedule</h1>
                    <div className="schedule-container">
                        <div>
                            <ShowOnlyFavoritesButton handleChange={this.handleFavoriteChange.bind(this)}></ShowOnlyFavoritesButton>
                            <FilterButton tags={this.state.tags} handleChange={this.handleFilterChange.bind(this)} />
                        </div>
                        {this.state.filteredProgram.days.map((day, i) =>
                            <Day key={i} currDay={day} />
                        )}
                    </div>
                </Layout>
            </div>
        );
    }
}

export default Schedule
