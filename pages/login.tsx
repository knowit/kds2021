import { auth, firebase } from '../firebase'
import React from 'react'
import Router from 'next/router'
import Link from 'next/link'

interface IState {
    username: String,
    password: String,
}

class Login extends React.Component<any, IState> {
    _isMounted: Boolean = false;

    handleSignOut = () => {
        auth.signOut().then(() => {
            console.log("signed out");
        }).catch((err) => {
            console.log(err)
        })
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

    getName() {
        if (auth && auth.currentUser) {
            return auth.currentUser.email;
        }
        return "not logged in";
    }

    render() {
        return (<div>
            <p>{this.getName()}</p>
            <button onClick={this.handleSignOut}>Sign out</button> <br></br><br></br>
            <input type="text" name="email" onChange={this.updateUsername} /> <br></br>
            <input type="password" name="passowrd" onChange={this.updatePassword} /> <br></br>
            <input type="submit" onClick={() => this.login(this.state.username, this.state.password)} value="Sign in" />

            <Link href="/callForPresentations">
                <a className="link callForPresentations">Call for presentations</a>
            </Link>
        </div>);
    }
}

export default Login;
