import Layout from "./components/Layout";
import "../styling/scheduleStyles.scss";
import Day from "./components/Day";
import FilterButton from "./components/FilterButton";
import ShowOnlyFavoritesButton from "./components/ShowOnlyFavoritesButton";
import Loader from "./components/Loader";
import FirestoreHandler from '../helpers/firestoreHandler';
import React from 'react';
import _ from 'lodash';
import ProgramUtils from '../helpers/programUtils';
import Router from "next/router";

class Schedule extends React.Component<any, any> {
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
            showOnlyFavorites: false,
            loading: true
        }
    }

    async componentDidMount() {
        const program = await ProgramUtils.loadProgram('test');

        console.log(program);

        const tags = (await FirestoreHandler.getAll('tags')).map(tag => tag.name);

        let selectedTags = Router.query.tags || [];
        if (selectedTags && !Array.isArray(selectedTags)) {
            selectedTags = [Router.query.tags as string];
        }

        this.setState({
            program: program,
            filteredProgram: program,
            tags: tags,
            loading: false,
            showOnlyFavorites: Router.query.onlyFavorites == 'true',
            selectedTags: selectedTags
        }, this.filter);
    }

    updateQuery() {
        Router.replace({
            pathname: Router.route,
            query: {
                onlyFavorites: this.state.showOnlyFavorites,
                tags: this.state.selectedTags
            }
        });
    }

    handleFavoriteChange(val) {
        this.setState({
            showOnlyFavorites: val
        }, () => {
            this.updateQuery()
            this.filter();
        });
    }

    handleFilterChange(val) {
        this.setState({
            selectedTags: val
        }, () => {
            this.updateQuery()
            this.filter();
        });
    }

    filter() {
        const filteredProgram = _.cloneDeep(this.state.program);

        ProgramUtils.filterProgram(filteredProgram, (talk) => {
            if (this.state.showOnlyFavorites && !localStorage.getItem(talk._id)) {
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
                    <Loader loading={this.state.loading}>

                        <h1>Schedule</h1>
                        <div className="schedule-container">
                            <div>
                                <ShowOnlyFavoritesButton handleChange={this.handleFavoriteChange.bind(this)} value={this.state.showOnlyFavorites}></ShowOnlyFavoritesButton>
                                <FilterButton tags={this.state.tags} value={this.state.selectedTags} handleChange={this.handleFilterChange.bind(this)} />
                            </div>
                            {this.state.filteredProgram.days.map((day, i) =>
                                <Day key={i} currDay={day} onChange={() => this.filter()} />
                            )}
                        </div>
                    </Loader>
                </Layout>
            </div>
        );
    }
}

export default Schedule
