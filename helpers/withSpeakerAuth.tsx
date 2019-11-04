import React from 'react';
import router from 'next/router'
import { auth, firestore } from '../firebase_utils';
import { User } from 'firebase';
import Loader from '../pages/components/Loader';
import FirestoreHandler from '../helpers/firestoreHandler';
import ApiHandler from '../helpers/apiHandler';

interface IState {
    status: 'LOADING' | 'SIGNED_IN'  | 'SIGNED_OUT'
}

const withSpeakerAuth = (Component, Redirect?) =>  {
    return class extends React.Component<any, IState> {
        constructor(props) {
            super(props);
            this.state = {
                status: 'LOADING'
            }
        }

        async isSpeaker() {
            return await ApiHandler.isSpeaker();
        }

        async authenticate(authUser: User) {
            if (authUser) {
                const isSpeaker = await this.isSpeaker();
                console.log(isSpeaker);
                if (isSpeaker) {
                    this.setState({
                        status: 'SIGNED_IN'
                    });
                    return;
                }
            }
            this.setState({
                status: 'SIGNED_OUT'
            });
            if (typeof Redirect == 'string') {
                router.push(Redirect);
            }
            
        }

        async componentDidMount() {
            auth.onAuthStateChanged((authUser) => this.authenticate(authUser));
        }

        renderContent() {
            if (this.state.status == 'LOADING') {
                return (<Loader loading={false}></Loader>);
            }
            else if (this.state.status == 'SIGNED_IN') {
                return (<Component {...this.props } />);
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

export default withSpeakerAuth;