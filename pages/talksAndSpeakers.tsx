import Layout from "./components/Layout";
import TalkView from "./components/Talk";
import FilterButton from "./components/FilterButton";
import "../styling/talksAndSpeakersStyles.scss";
import Loader from "./components/Loader";
import React from "react";
import dynamic from "next/dynamic"
import ShowOnlyFavoritesButton from "./components/ShowOnlyFavoritesButton";
import Router from "next/router";
import FirestoreHandler from '../helpers/firestoreHandler';
import VoteButton from './components/VoteButton';

interface IState {
  talks: Array<any>,
  filteredTalks: Array<any>,
  tags: Array<string>,
  selectedTags: Array<string>,
  showOnlyFavorites: boolean,
  loading: boolean
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
      selectedTags: [],
      loading: true
    }
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

    // Update speaker to its data instead of ref, can drop this if data is stored instead of id, this will duplicate data tho..
    for (let i = 0; i < talks.length; i++) {
      talks[i].speaker = await FirestoreHandler.get('users', talks[i].speaker);
      for (let j = 0; j < talks[i].cospeakers.length; j++) {
        talks[i].cospeakers[j] = await FirestoreHandler.get('users', talks[i].cospeakers[j]);
      }
    }

    const tags = (await FirestoreHandler.getAll('tags')).map(tag => tag.name);

    let selectedTags = Router.query.tags || [];
    if (selectedTags && !Array.isArray(selectedTags)) {
      selectedTags = [Router.query.tags as string];
    }

    this.setState({
      talks: talks,
      tags: tags,
      selectedTags: selectedTags as string[],
      showOnlyFavorites: Router.query.onlyFavorites == 'true',
      loading: false
    }, this.filter);
  }

  render() {
    return (<div className="talksAndSpeakers">
      <Layout>
        <Loader loading={this.state.loading}>¨
        <h1> Talks and speakers</h1>
          <div className="schedule-container">
            <div className="schedule-filter">
              <ShowOnlyFavoritesButton handleChange={this.handleFavoriteChange.bind(this)}></ShowOnlyFavoritesButton>
              <FilterButton value={this.state.selectedTags} tags={this.state.tags} handleChange={this.handleFilterChange.bind(this)} />
            </div>
            <div className="talks">
              {this.state.filteredTalks.map(talk =>
                <div key={talk._id}>
                  <div>
                    <div className="talk-container">
                      <TalkView
                        talk={talk}
                      >
                      </TalkView>
                      <FavouriteTalkButtonNoSSR onChange={() => this.filter()} talkId={talk.id} />
                      <VoteButton talkId={talk._id} currentFavoriteId={talk._id} onChange={(a) => console.log(a)}></VoteButton>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>
        </Loader>
      </Layout>
    </div >
    )
  }
}

export default TalksAndSpeakers;


