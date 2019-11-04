import '../styling/addTalkStyles.scss';
import Layout from "./components/Layout";
import withSpeakerAuth from '../helpers/withSpeakerAuth';
import React from 'react';
import { firestore, auth } from '../firebase_utils';
import FirestoreHandler from '../helpers/firestoreHandler';
import ApiHandler from '../helpers/apiHandler';
import TagSelector from './components/TagSelector';
import SpeakersSelector from './components/SpeakersSelector';
import Loader from './components/Loader';
import Talk from '../models/Talk';
import _ from 'lodash';
import { getDurationMinutes } from '../helpers/time';
import Router from "next/router";
import languages from '../models/Languages.json';

interface IState {
    talk: Talk
}

class AddTalk extends React.Component<any, IState> {
    constructor(props) {
        super(props);

        this.state = {
            talk: new Talk()
        };
    }

    async componentDidMount() {
        if (Router.query.id) {
            const cachedTalk = await ApiHandler.getTalk(Router.query.id as string);

            const talk = {...cachedTalk};
            talk.speaker = cachedTalk.speaker.id;
            talk.cospeakers = cachedTalk.cospeakers.map(speaker => speaker.id);

            if (talk) {
                this.setState({
                    talk
                });
            }
        }
    }

    async addTalk() {
        const talk = this.state.talk;
        await ApiHandler.addTalk(talk);
        Router.push('/talksAndSpeakers');
    }
    
    async editTalk() {
        const talk = this.state.talk;
        await ApiHandler.updateTalk(talk);
        Router.push('/talksAndSpeakers');    
    }

    updateTalk(val: any, prop: string) {
        this.setState((prev) => {
            prev.talk[prop] = val;

            return prev;
        });
    }

    updateDuration(type: string) {
        if (type !== 'Workshop') {
            this.updateTalk(getDurationMinutes(type), 'duration');
        }
    }

    updateSpeakers(val: any) {
        this.setState((prev) => {
            const talk = prev.talk as Talk;
            talk.speaker = val[0];
            talk.cospeakers = val.splice(1);
            return {
                talk: talk
            }
        });
    }

    render() {
        return (
            <div className="addTalk">
                <Layout>
                    <div className="content">
                        <div className="form">
                            <p>New Talk</p>
                            <label className="form-row-header">Name</label>
                            <input className="form-row" type="text" onChange={(evt) => this.updateTalk(evt.target.value, 'name')} value={this.state.talk.name} />

                            <label className="form-row-header">Short description</label>
                            <textarea className="form-row" cols={80} rows={10} onChange={(evt) => this.updateTalk(evt.target.value, 'description')} value={this.state.talk.description}></textarea>

                            <label className="form-row-header">Outline</label>
                            <textarea className="form-row" cols={40} rows={5} onChange={(evt) => this.updateTalk(evt.target.value, 'outline')} value={this.state.talk.outline}></textarea>
                            <label className="form-row-header">Type</label>
                            <select className="form-row" onChange={(evt) => this.updateTalk(evt.target.value, 'type')} value={this.state.talk.type}>
                                <option value="Lightning talk">Lightning talk</option>
                                <option value="Short presentation">Short presentation</option>
                                <option value="Long presentation">Long presentation</option>
                                <option value="Workshop">Workshop</option>
                            </select>
                            {this.state.talk.type == 'Workshop' && [
                                <label className="form-row-header">Duration in minutes</label>,
                                <input className="form-row" type="number" onChange={(evt) => this.updateTalk(evt.target.value, 'duration')} value={"" + this.state.talk.duration}></input>]}
                            <label className="form-row-header">Difficulty level</label>
                            <select className="form-row" onChange={(evt) => this.updateTalk(evt.target.value, 'difficulty')} value={this.state.talk.difficulty}>
                                <option value="beginner">Beginner</option>
                                <option value="intermediate">Intermediate</option>
                                <option value="advanced">Advanced</option>
                            </select>
                            <label className="form-row-header" >Language used</label>
                            <select className="form-row" onChange={(evt) => this.updateTalk(evt.target.value, 'language')} value={this.state.talk.language}>
                                {languages.map(language =>
                                    <option value={language} key={language}>{language}</option>)}
                            </select>
                            <label className="form-row-header">Speakers</label>
                            <SpeakersSelector className="form-row" value={this.state.talk.cospeakers} onChange={(val) => this.updateSpeakers(val)}></SpeakersSelector>
                            <label className="form-row-header">Tags</label>
                            <TagSelector className="form-row" value={this.state.talk.tags} onChange={(val) => this.updateTalk(val, 'tags')}></TagSelector>
                            <label className="form-row-header">Comment to organizers</label>
                            <textarea className="form-row" cols={40} rows={5}></textarea>

                            <button className="form-row" onClick={() => Router.query.id ? this.editTalk() : this.addTalk()} >{Router.query.id ? "Save talk" : "New talk"}</button>
                        </div>
                    </div>
                </Layout>
            </div >
        );
    }
}

export default withSpeakerAuth(AddTalk, '/login');
