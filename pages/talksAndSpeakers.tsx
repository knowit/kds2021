import Layout from "./components/Layout";
import TalkView from "./components/Talk";
import Talk from "../models/Talk";
import FilterButton from "./components/FilterButton";
import "../styling/talksAndSpeakersStyles.scss";
import React from "react";
import dynamic from "next/dynamic"
import ShowOnlyFavoritesButton from "./components/ShowOnlyFavoritesButton";

import FirestoreHandler from '../helpers/firestoreHandler';

interface IState {
  talks: Array<any>,
  filteredTalks: Array<any>,
  tags: Array<string>,
  selectedTags: Array<string>,
  showOnlyFavorites: boolean
}

const FavouriteTalkButtonNoSSR = dynamic(() => import("./components/FavouriteTalkButton"), {
  ssr: false
});

class TalksAndSpeakers extends React.Component<any, IState> {
  constructor(props) {
    super(props);

    this.state = {
      talks: [],
      filteredTalks: [],
      showOnlyFavorites: false,
      tags: [],
      selectedTags: []
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
    this.setState({
      filteredTalks: this.state.talks.filter(talk => {
        if (this.state.showOnlyFavorites && !localStorage.getItem(talk.id)) {
          return false;
        }
        if (this.state.selectedTags.length > 0 && !talk.tags.some(tag => this.state.selectedTags.includes(tag))) {
          return false;
      }

        return true;
      })
    });
  }

  async componentDidMount() {
    let talks = await FirestoreHandler.getAll('talks');

    // Update speaker to its data instead of ref, can drop this if data is stored instead of ref, this will duplicate data tho..
    for (let i = 0; i < talks.length; i++) {
      talks[i].speaker = await FirestoreHandler.get('speakers', talks[i].speaker.id);
      for (let j = 0; j < talks[i].cospeakers.length; j++) {
        talks[i].cospeakers[j] = await FirestoreHandler.get('speakers', talks[i].cospeakers[j].id);
      }
    }
    
    const tags = (await FirestoreHandler.getAll('tags')).map(tag => tag.name);

    this.setState({
      talks: talks,
      tags: tags
    }, this.filter);    
  }

  render() {
    return (<div className="talksAndSpeakers">
      <Layout>
        <h1> Talks and speakers</h1>
        <div className="schedule-container">
          <div className="schedule-filter">
            <ShowOnlyFavoritesButton handleChange={this.handleFavoriteChange.bind(this)}></ShowOnlyFavoritesButton>
            <FilterButton tags={this.state.tags} handleChange={this.handleFilterChange.bind(this)} />
          </div>
          <div className="talks">
            {this.state.filteredTalks.map(talk =>
              <div key={talk.id}>
                <div>
                  <div className="talk-container">
                    <TalkView
                      talk={talk}
                    >
                    </TalkView>
                    <FavouriteTalkButtonNoSSR talkId={talk.id} />
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </Layout>
    </div >
    )
  }
}

export default TalksAndSpeakers;


