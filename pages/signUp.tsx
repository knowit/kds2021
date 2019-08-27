import { auth, firestore } from '../firebase'
import React from 'react'
import Router from 'next/router'
import Layout from './components/Layout'

class Form {
    name: string
    email: string
    password: string
    password2: string
} 

interface IState {
    form: Form,
    speaker: boolean,
    speakerInfo: string
}

class Login extends React.Component<any, IState> {

    constructor(props) {
        super(props);

        this.state = {
            form: {
                name: "",
                email: "",
                password: "",
                password2: ""
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
        if (this.validForm(this.state.form)) {
            auth.createUserWithEmailAndPassword(this.state.form.email, this.state.form.password)
                .then((val) => {
                    console.log(val);
                    if (this.state.speaker) {
                        firestore.collection('speakers').add({
                            name: this.state.form.name,
                            info: this.state.speakerInfo,
                            email: this.state.form.email
                        });
                    }
                    else {
                        firestore.collection('participants').add({
                            name: this.state.form.name,
                            email: this.state.form.email
                        });
                    }
                })
                .catch(console.error);
        }
        else {
            console.log("not valid form");
        }
    }

    validForm(form: Form) : boolean {
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
                    <div>
                        <label>Name</label><br></br>
                        <input type="text" onChange={(evt) => this.updateForm(evt.target.value, 'name')}/>
                    </div>
                    <div>
                        <label>Email</label><br></br>
                        <input type="text" onChange={(evt) => this.updateForm(evt.target.value, 'email')}/>
                    </div>
                    <div>
                        <label>Password</label><br></br>
                        <input type="password" onChange={(evt) => this.updateForm(evt.target.value, 'password')}/>
                    </div>
                    <div>
                        <label>Password again</label><br></br>
                        <input type="password" onChange={(evt) => this.updateForm(evt.target.value, 'password2')}/>
                    </div>
                    <div>
                        <label>Speaker?</label><br></br>
                        <input type="checkbox" onChange={(evt) => this.updateState(evt.target.checked, 'speaker')}/>
                    </div>
                    {
                        this.state.speaker &&
                        <div>
                            <label>Info about you</label><br></br>
                            <textarea name="" id="" cols={30} rows={10} onChange={(evt) => this.updateState(evt.target.value, 'speakerInfo')}></textarea>
                        </div>
                    }
                    <button onClick={() => this.signUp()}> Sign up!</button>
                </div>
            </Layout>
        </div>);
    }
}

export default Login;
