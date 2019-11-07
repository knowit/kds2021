import '../styling/loginStyles.scss';
import { auth, firestore } from '../firebase_utils'
import FirestoreHandler from '../helpers/firestoreHandler';
import React from 'react'
import Router from 'next/router'
import Layout from './components/Layout'
import ApiHandler from '../helpers/apiHandler';
import Loader from './components/Loader';

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
    loading: boolean
    error: string
}

class Login extends React.Component<any, IState> {
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
            error: "",
            loading: false,
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

    async signUp() {
        if (this.validForm(this.state.form)) {
            this.setState({
                loading: true
            });
            auth.createUserWithEmailAndPassword(this.state.form.email, this.state.form.password)
                .then((val) => {
                    const auid = val.user.uid;
                    if (this.state.speaker) {
                        ApiHandler.addUser({
                            speaker: true,
                            name: this.state.form.name,
                            info: this.state.speakerInfo
                        });
                        Router.push('/addTalk');
                    }
                    else {
                        ApiHandler.addUser({
                            name: this.state.form.name
                        });
                        Router.push('/');
                    }
                    this.setState({
                        loading: false
                    });
                })
                .catch(err => this.setState({
                    error: err.message,
                    loading: false
                }));
        }
        else {
            this.setState({
                error: "Form not valid"
            });
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
        return (<div className="page signUp">
            <Layout>
                <Loader loading={this.state.loading}>
                    <div className="document">
                        <div className="form">
                            <label className="form-row-header">Name</label>
                            <input className="form-row" type="text" onChange={(evt) => this.updateForm(evt.target.value, 'name')} value={this.state.form.name} />

                            <label className="form-row-header">Email</label>
                            <input className="form-row" type="text" onChange={(evt) => this.updateForm(evt.target.value, 'email')}  value={this.state.form.email} />

                            <label className="form-row-header">Password</label>
                            <input className="form-row" type="password" onChange={(evt) => this.updateForm(evt.target.value, 'password')}  value={this.state.form.password} />

                            <label className="form-row-header">Password again</label>
                            <input className="form-row" type="password" onChange={(evt) => this.updateForm(evt.target.value, 'password2')}  value={this.state.form.password2} />

                            <label className="form-row-header">Knowit company (full name)</label>
                            <input className="form-row" type="text" onChange={(evt) => this.updateForm(evt.target.value, 'company')}  value={this.state.form.company} />

                            <label className="form-row-header">Knowit country</label>
                            <input className="form-row" type="text" onChange={(evt) => this.updateForm(evt.target.value, 'country')}  value={this.state.form.country} />

                            <label className="form-row-header">Speaker?</label>
                            <input className="form-row" type="checkbox" onChange={(evt) => this.updateState(evt.target.checked, 'speaker')}  checked={this.state.speaker} />
                            {
                                this.state.speaker &&
                                <React.Fragment>
                                    <label className="form-row-header">Info about you</label>
                                    <textarea className="form-row" name="" id="" cols={30} rows={10} onChange={(evt) => this.updateState(evt.target.value, 'speakerInfo')} value={this.state.speakerInfo} ></textarea>
                                </React.Fragment>
                            }
                            <button onClick={() => this.signUp()}> Sign up!</button>
                            {this.state.error && <h4 className="form-error">{this.state.error}</h4>}
                        </div>
                    </div>
                </Loader>
            </Layout>
        </div >);
    }
}

export default Login;
