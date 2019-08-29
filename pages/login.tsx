import '../styling/loginStyles.scss';
import { auth, firebase } from '../firebase';
import React from 'react';
import Router from 'next/router';
import Link from 'next/link';
import Layout from './components/Layout';

interface IState {
    username: String,
    password: String,
}

class Login extends React.Component<any, IState> {
    _isMounted: Boolean = false;

    handleSignOut = () => {
        console.log(auth.currentUser);
        auth.signOut().then(() => {
            console.log("signed out");
        }).catch((err) => {
            console.log(err)
        });
    }

    login = (user, pass) => {
        auth.signInWithEmailAndPassword(user, pass)
            .then(() => {
                Router.push('/error', '/'); // Weird bug, see https://github.com/zeit/next.js/issues/5947
            })
            .catch((err) => console.error(err));
    }

    updateUsername = (evt) => {
        if (this._isMounted) {
            this.setState({
                username: evt.target.value
            });
        }
    }

    updatePassword = (evt) => {
        if (this._isMounted) {
            this.setState({
                password: evt.target.value
            });
        }
    }

    componentDidMount() {
        this._isMounted = true;
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        return (<div className="login">
            <Layout>
                <div className="content">
                    <div className="login-form">
                        <h2 className="form-row">Login</h2>
                        {/*<button onClick={this.handleSignOut}>Sign out</button> <br></br><br></br>*/}
                        {/*<label className="form-row">Email</label>*/}
                        <input className="form-row" type="text" name="email" placeholder="Email" onChange={this.updateUsername} />
                        {/*<label className="form-row">Password</label>*/}
                        <input className="form-row" type="password" name="passowrd" placeholder="Password" onChange={this.updatePassword} />
                        <input className="form-row" type="submit" onClick={() => this.login(this.state.username, this.state.password)} value="Sign in" />
                        <div className="form-row">
                            <span>
                                Not signed up? Sign up &nbsp;
                                <Link href="/signUp">
                                    <a>here</a>
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>);

    }
}

export default Login;
