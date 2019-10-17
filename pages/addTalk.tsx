import Layout from "./components/Layout";
import '../styling/addTalkStyles.scss';
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

    async addTalk() {
        const talk = this.state.talk;

        //await FirestoreHandler.create('talks', talk);
        await ApiHandler.addTalk(talk);
        Router.push('/talksAndSpeakers');
    }

    updateTalk(val: any, prop: string) {
        this.setState((prev) => {
            prev.talk[prop] = val;

            return prev;
        });
    }

    updateSpeakers(val: any) {
        this.setState((prev) => {
            const talk = prev.talk as Talk;

            talk.speaker= val[0]._id;
            talk.cospeakers = val.splice(1).map(speaker => speaker._id);
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
                            <input className="form-row" type="text" onChange={(evt) => this.updateTalk(evt.target.value, 'name')} defaultValue={this.state.talk.name} />

                            <label className="form-row-header">Short description</label>
                            <textarea className="form-row" cols={80} rows={10} onChange={(evt) => this.updateTalk(evt.target.value, 'description')} defaultValue={this.state.talk.description}></textarea>

                            <label className="form-row-header">Outline</label>
                            <textarea  className="form-row" cols={40} rows={5} onChange={(evt) => this.updateTalk(evt.target.value, 'outline')} defaultValue={this.state.talk.outline}></textarea>
                            <label className="form-row-header">Type</label>
                            <select className="form-row" onChange={(evt) => this.updateTalk(evt.target.value, 'type')} defaultValue={this.state.talk.type}>
                                <option value="Lightning talk">Lightning talk</option>
                                <option value="Short presentation">Short presentation</option>
                                <option value="Long presentation">Long presentation</option>
                                <option value="Workshop">Workshop</option>
                            </select>
                            <label className="form-row-header">Difficulty level</label>
                            <select className="form-row" onChange={(evt) => this.updateTalk(evt.target.value, 'difficulty')} defaultValue={this.state.talk.difficulty}>
                                <option value="beginner">Beginner</option>
                                <option value="intermediate">Intermediate</option>
                                <option value="advanced">Advanced</option>
                            </select>
                            <label className="form-row-header">Language used</label>
                            <select className="form-row" onChange={(evt) => this.updateTalk(evt.target.value, 'language')} defaultValue={this.state.talk.language}>
                            { languages.map(language => 
                                <option value={language}>{language}</option>)}
                            </select>
                            <label className="form-row-header">Speakers</label>
                            <SpeakersSelector className="form-row" value={this.state.talk.cospeakers} onChange={(val) => this.updateSpeakers(val)}></SpeakersSelector>
                            <label className="form-row-header">Tags</label>
                            <TagSelector className="form-row" value={this.state.talk.tags} onChange={(val) => this.updateTalk(val, 'tags')}></TagSelector>
                            <label className="form-row-header">Comment to organizers</label>
                            <textarea className="form-row" cols={40} rows={5}></textarea>

                            <button className="form-row" onClick={() => this.addTalk()} >New talk</button>
                        </div>
                    </div>
                </Layout>
            </div >
        );
    }
}

export default withSpeakerAuth(AddTalk, '/login');
