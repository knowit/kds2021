import Layout from "./components/Layout";
import '../styling/addTalkStyles.scss';
import withAuth from '../helpers/withAuth';
import React from 'react';
import { firestore, auth } from './../firebase';
import TagSelector from './components/TagSelector'

class AddTalk extends React.Component {

    addTalk(name) {
        firestore.collection('talks').add({
            name: name,
            tags: ['machine learning', 'test'],
            time: new Date()
        })
            .then(console.log)
            .catch(console.log);

        console.log(auth.currentUser);

        firestore.collection('talks').get()
            .then(console.log)
            .catch(console.error)
    }

    render() {
        return (
            <div className="addTalk">
                <Layout>
                    <div className="content">
                        <p>New Talk</p>
                        <div className="form-row">
                            <label>Name</label><br></br>
                            <input type="text" name="" id="" />
                        </div>
                        <div className="form-row">
                            <label>Short description</label><br></br>
                            <textarea name="" id="" cols={30} rows={10}></textarea>
                        </div>
                        <div className="form-row">
                            <label>Outline</label><br></br>
                            <input type="text" name="" id="" />
                        </div>
                        <div className="form-row">
                            <label>Type</label><br></br>
                            <select name="" id="">
                                <option value="Lightning talk">Lightning talk</option>
                                <option value="Short presentation">Short presentation</option>
                                <option value="Long presentation">Long presentation</option>
                                <option value="Workshop">Workshop</option>
                            </select>
                        </div>
                        <div className="form-row">
                            <label>Difficulty level</label><br></br>
                            <select name="" id="">
                                <option value="beginner">Beginner</option>
                                <option value="intermediate">Intermediate</option>
                                <option value="advanced">Advanced</option>
                            </select>
                        </div>
                        <div className="form-row">
                            <label>Language used</label><br></br>
                            <select name="" id="">
                                <option value="english">English</option>
                                <option value="norwegian">Norwegian</option>
                                <option value="swedish">Swedish</option>
                            </select>
                        </div>
                        <div className="form-row">
                            <label>Comment to organizers</label><br></br>
                            <input type="text" name="" id="" />
                        </div>
                        <div className="form-row">
                            <label>Tags</label><br></br>
                            <TagSelector></TagSelector>
                        </div>
                        
                        <input type="button" value="New Talk" onClick={() => this.addTalk("testasd")} />
                    </div>
                </Layout>
            </div>
        );
    }
}

export default withAuth(AddTalk, '/login');
