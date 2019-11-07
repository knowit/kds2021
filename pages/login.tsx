import '../styling/loginStyles.scss';
import { auth, firebase } from '../firebase_utils';
import React from 'react';
import Router from 'next/router';
import Link from 'next/link';
import Layout from './components/Layout';
import Loader from './components/Loader';

interface IState {
    username: string,
    password: string,
    error: string | null
    loading: boolean
}

class Login extends React.Component<any, IState> {
    _isMounted: Boolean = false;

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            error: null,
            loading: false
        }
    }

    login = async (user, pass) => {
        this.setState({
            error: null,
            loading: true
        });
        auth.signInWithEmailAndPassword(user, pass)
            .then(() => {
                Router.push('/error', '/'); // Weird bug, see https://github.com/zeit/next.js/issues/5947
            })
            .catch((err) => {
                if (err.code === 'auth/user-not-found') {
                    this.setState({
                        error: "Username or password is wrong",
                        loading: false
                    });
                }
            });
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
        return (<div className="page login">
            <Layout>

                <div className="document">
                    <div className="form">
                        <h2 className="form-row-header">Login</h2>
                        <Loader loading={this.state.loading}>
                            {/*<label className="form-row">Email</label>*/}
                            <input className="form-row" type="text" name="email" placeholder="Email" onChange={this.updateUsername} value={this.state.username} />
                            {/*<label className="form-row">Password</label>*/}
                            <input className="form-row" type="password" name="passowrd" placeholder="Password" onChange={this.updatePassword} value={this.state.password} />
                            <input className="form-row" type="submit" onClick={() => this.login(this.state.username, this.state.password)} value="Sign in" />
                            {this.state.error && <h4 className="form-error">{this.state.error}</h4>}
                            <div className="form-row">
                                <span>
                                    Not signed up? Sign up &nbsp;
                                <Link href="/signUp">
                                        <a>here</a>
                                    </Link>
                                </span>
                            </div>
                        </Loader>
                    </div>
                </div>
            </Layout>
        </div>);

    }
}

export default Login;
