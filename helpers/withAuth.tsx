import React from 'react';
import router from 'next/router'
import { auth } from '../firebase';

interface IState {
    status: String
}

const withAuth = (Component, redirect) =>  {
    return class extends React.Component<any, IState> {
        constructor(props) {
            super(props);
            this.state = {
                status: 'LOADING'
            }
        }

        componentDidMount() {
            auth.onAuthStateChanged(authUser => {
                if (authUser) {
                    this.setState({
                        status: 'SIGNED_IN'
                    });
                }
                else {
                    router.push(redirect);
                }
            });
        }

        renderContent() {
            if (this.state.status == 'LOADING') {
                return (<h1>Loading...</h1>);
            }
            else if (this.state.status == 'SIGNED_IN') {
                return (<Component {...this.props } />);
            }
        }

        render() {
            return (<React.Fragment>
                {this.renderContent()}
            </React.Fragment>);
        }

    }
}

export default withAuth;