import '../styling/loginStyles.scss';
import { auth, firestore } from '../firebase'
import FirestoreHandler from '../helpers/firestoreHandler';
import React from 'react'
import Router from 'next/router'
import Layout from './components/Layout'

class Form {
    name: string
    email: string
    password: string
    password2: string
    company: string
    country: string
}

interface IState {
    form: Form,
    speaker: boolean,
    speakerInfo: string
}

class Login extends React.Component<any, IState> {
    signup = false;
    constructor(props) {
        super(props);

        this.state = {
            form: {
                name: "",
                email: "",
                password: "",
                password2: "",
                company: "",
                country: ""
            },
            speaker: false,
            speakerInfo: ""
        }
    }

    updateForm(val, prop) {
        this.setState((prev) => {
            prev.form[prop] = val;
            return prev;
        });
    }

    updateState(val, prop) {
        this.setState((prev) => {
            prev[prop] = val;
            return prev;
        });
    }

    signUp() {
        this.signup = true;
        if (this.validForm(this.state.form)) {
            auth.createUserWithEmailAndPassword(this.state.form.email, this.state.form.password)
                .then((val) => {
                    const auid = val.user.uid;
                    if (this.state.speaker) {
                        FirestoreHandler.updateOrCreate('users', auid, {
                            speaker: true,
                            name: this.state.form.name,
                            info: this.state.speakerInfo,
                            email: this.state.form.email
                        });
                        Router.push('/addTalk');
                    }
                    else {
                        FirestoreHandler.updateOrCreate('users', auid, {
                            speaker: false,
                            name: this.state.form.name,
                            email: this.state.form.email
                        });
                        Router.push('/');
                    }
                })
                .catch(console.error);
        }
        else {
            console.log("not valid form");
        }
    }

    validForm(form: Form): boolean {
        if (!form.email.includes('@')) { // Maybe som more checks
            return false;
        }

        if (!(form.password.length >= 6 && form.password == form.password2)) {
            return false;
        }
        return true;
    }

    render() {
        return (<div className="signUp">
            <Layout>
                <div className="content">
                    <div className="form">
                        <label className="form-row-header">Name</label>
                        <input className="form-row" type="text" onChange={(evt) => this.updateForm(evt.target.value, 'name')} />

                        <label className="form-row-header">Email</label>
                        <input className="form-row" type="text" onChange={(evt) => this.updateForm(evt.target.value, 'email')} />

                        <label className="form-row-header">Password</label>
                        <input className="form-row" type="password" onChange={(evt) => this.updateForm(evt.target.value, 'password')} />

                        <label className="form-row-header">Password again</label>
                        <input className="form-row" type="password" onChange={(evt) => this.updateForm(evt.target.value, 'password2')} />

                        <label className="form-row-header">Knowit company (full name)</label>
                        <input className="form-row" type="text" onChange={(evt) => this.updateForm(evt.target.value, 'company')} />

                        <label className="form-row-header">Knowit country</label>
                        <input className="form-row" type="text" onChange={(evt) => this.updateForm(evt.target.value, 'country')} />

                        <label className="form-row-header">Speaker?</label>
                        <input className="form-row" type="checkbox" onChange={(evt) => this.updateState(evt.target.checked, 'speaker')} />
                        {
                            this.state.speaker &&
                            <React.Fragment>
                                <label className="form-row-header">Info about you</label>
                                <textarea className="form-row" name="" id="" cols={30} rows={10} onChange={(evt) => this.updateState(evt.target.value, 'speakerInfo')}></textarea>
                            </React.Fragment>
                        }
                        <button onClick={() => this.signUp()}> Sign up!</button>
                    </div>
                </div>
            </Layout>
        </div >);
    }
}

export default Login;
