import Layout from "./components/Layout";
import '../styling/addTalkStyles.scss';
import withSpeakerAuth from '../helpers/withSpeakerAuth';
import React from 'react';
import { firestore, auth } from './../firebase';
import TagSelector from './components/TagSelector'
import SpeakersSelector from './components/SpeakersSelector'

interface IState {
    name: string,
    description: string,
    outline: string,
    type: string,
    difficulty: string,
    language: string,
    tags: Array<string>,
    speakers: Array<string>
}

class AddTalk extends React.Component<any, IState> {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            description: "",
            outline: "",
            type: "Lightning talk",
            difficulty: "beginner",
            language: "norwegian",
            tags: [],
            speakers: []
        };
    }
    addTalk() {
        // Change to not use state and instead create object on state..
        firestore.collection('talks').add(this.state)
            .then(console.log)
            .catch(console.log);
         
    }

    updateState(val: any, stateName: string) {
        const state = {};
        state[stateName] = val;
        this.setState(state);
    }

    render() {
        return (
            <div className="addTalk">
                <Layout>
                    <div className="content">
                        <p>New Talk</p>
                        <div className="form-row">
                            <label>Name</label><br></br>
                            <input type="text" onChange={(evt) => this.updateState(evt.target.value, 'name')} value={this.state.name}/>
                        </div>
                        <div className="form-row">
                            <label>Short description</label><br></br>
                            <textarea cols={30} rows={10} onChange={(evt) => this.updateState(evt.target.value, 'description')} value={this.state.description}></textarea>
                        </div>
                        <div className="form-row">
                            <label>Outline</label><br></br>
                            <input type="text" onChange={(evt) => this.updateState(evt.target.value, 'outline')} value={this.state.outline}/>
                        </div>
                        <div className="form-row">
                            <label>Type</label><br></br>
                            <select onChange={(evt) => this.updateState(evt.target.value, 'type')} value={this.state.type}>
                                <option value="Lightning talk">Lightning talk</option>
                                <option value="Short presentation">Short presentation</option>
                                <option value="Long presentation">Long presentation</option>
                                <option value="Workshop">Workshop</option>
                            </select>
                        </div>
                        <div className="form-row">
                            <label>Difficulty level</label><br></br>
                            <select onChange={(evt) => this.updateState(evt.target.value, 'difficulty')} value={this.state.difficulty}>
                                <option value="beginner">Beginner</option>
                                <option value="intermediate">Intermediate</option>
                                <option value="advanced">Advanced</option>
                            </select>
                        </div>
                        <div className="form-row">
                            <label>Language used</label><br></br>
                            <select onChange={(evt) => this.updateState(evt.target.value, 'language')}  value={this.state.language}>
                                <option value="english">English</option>
                                <option value="norwegian">Norwegian</option>
                                <option value="swedish">Swedish</option>
                            </select>
                        </div>
                        <div className="form-row">
                            <label>Speakers</label><br></br>
                            <SpeakersSelector value={this.state.speakers} onChange={(val) => this.updateState(val, 'speakers')}></SpeakersSelector>  
                        </div>
                        <div className="form-row">
                            <label>Tags</label><br></br>
                            <TagSelector value={this.state.tags} onChange={(val) => this.updateState(val, 'tags')}></TagSelector>
                        </div>
                        <div className="form-row">
                            <label>Comment to organizers</label><br></br>
                            <input type="text" name="" id="" />
                        </div>
                        
                        <input type="button" value="New Talk" onClick={() => this.addTalk()} />
                    </div>
                </Layout>
            </div>
        );
    }
}

export default withSpeakerAuth(AddTalk, '/login');
