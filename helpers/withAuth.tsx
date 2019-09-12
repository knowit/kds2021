import React from 'react';
import router from 'next/router'
import { auth } from '../firebase';
import Loader from '../pages/components/Loader';

interface IState {
    status: String
}

const withAuth = (Component, Redirect?) => {
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
                    this.setState({
                        status: 'SIGNED_OUT'
                    });
                    if (typeof Redirect == 'string') {
                        router.push(Redirect);
                    }
                }
            });
        }

        renderContent() {
            if (this.state.status == 'LOADING') {
                return (<Loader loading={false}></Loader>);
            }
            else if (this.state.status == 'SIGNED_IN') {
                return (<Component {...this.props } />);
            }
            else if (this.state.status == 'SIGNED_OUT' && Redirect) {
                return (<Redirect {...this.props }/>);
            }
            else {
                return (<React.Fragment></React.Fragment>);
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