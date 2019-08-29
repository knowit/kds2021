import Layout from "./components/Layout";
import '../styling/addTalkStyles.scss';
import withSpeakerAuth from '../helpers/withSpeakerAuth';
import React from 'react';
import { firestore, auth } from './../firebase';
import TagSelector from './components/TagSelector'
import SpeakersSelector from './components/SpeakersSelector'

interface IState {
    form: Form
}

class Form {
    name: string
    description: string
    outline: string
    type: string
    difficulty: string
    language: string
    tags: Array<string>
    speakers: Array<string>    
}

class AddTalk extends React.Component<any, IState> {
    constructor(props) {
        super(props);

        this.state = {
            form: {
                name: "",
                description: "",
                outline: "",
                type: "Lightning talk",
                difficulty: "beginner",
                language: "norwegian",
                tags: [],
                speakers: []
            }
        };
    }
    addTalk() {
        firestore.collection('talks').add(this.state.form)
            .then(console.log)
            .catch(console.log);
         
    }

    updateForm(val: any, prop: string) {
        this.setState((prev) => {
            prev.form[prop] = val;

            return prev;
        });
    }

    render() {
        return (
            <div className="addTalk">
                <Layout>
                    <div className="content">
                        <p>New Talk</p>
                        <div className="form-row">
                            <label>Name</label><br></br>
                            <input type="text" onChange={(evt) => this.updateForm(evt.target.value, 'name')} defaultValue={this.state.form.name}/>
                        </div>
                        <div className="form-row">
                            <label>Short description</label><br></br>
                            <textarea cols={40} rows={10} onChange={(evt) => this.updateForm(evt.target.value, 'description')} defaultValue={this.state.form.description}></textarea>
                        </div>
                        <div className="form-row">
                            <label>Outline</label><br></br>
                            <textarea cols={40} rows={5} onChange={(evt) => this.updateForm(evt.target.value, 'outline')} defaultValue={this.state.form.outline}></textarea>
                        </div>
                        <div className="form-row">
                            <label>Type</label><br></br>
                            <select onChange={(evt) => this.updateForm(evt.target.value, 'type')} defaultValue={this.state.form.type}>
                                <option value="Lightning talk">Lightning talk</option>
                                <option value="Short presentation">Short presentation</option>
                                <option value="Long presentation">Long presentation</option>
                                <option value="Workshop">Workshop</option>
                            </select>
                        </div>
                        <div className="form-row">
                            <label>Difficulty level</label><br></br>
                            <select onChange={(evt) => this.updateForm(evt.target.value, 'difficulty')} defaultValue={this.state.form.difficulty}>
                                <option value="beginner">Beginner</option>
                                <option value="intermediate">Intermediate</option>
                                <option value="advanced">Advanced</option>
                            </select>
                        </div>
                        <div className="form-row">
                            <label>Language used</label><br></br>
                            <select onChange={(evt) => this.updateForm(evt.target.value, 'language')}  defaultValue={this.state.form.language}>
                                <option value="english">English</option>
                                <option value="norwegian">Norwegian</option>
                                <option value="swedish">Swedish</option>
                            </select>
                        </div>
                        <div className="form-row">
                            <label>Speakers</label><br></br>
                            <SpeakersSelector value={this.state.form.speakers} onChange={(val) => this.updateForm(val, 'speakers')}></SpeakersSelector>  
                        </div>
                        <div className="form-row">
                            <label>Tags</label><br></br>
                            <TagSelector value={this.state.form.tags} onChange={(val) => this.updateForm(val, 'tags')}></TagSelector>
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
